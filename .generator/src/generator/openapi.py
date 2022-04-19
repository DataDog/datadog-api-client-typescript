import pathlib
import yaml
import warnings
from jsonref import JsonRef
from urllib.parse import urlparse
from yaml import CSafeLoader

from . import formatter


def load(filename):
    path = pathlib.Path(filename)
    with path.open() as fp:
        return JsonRef.replace_refs(yaml.load(fp, Loader=CSafeLoader))


def get_name(schema):
    name = None
    if hasattr(schema, "__reference__"):
        name = schema.__reference__["$ref"].split("/")[-1]

    return name


def type_to_typescript(schema, alternative_name=None):
    """Return Typescript type name for the type."""
    name = get_name(schema)
    if name:
        if "enum" in schema:
            return name
        if (
            not schema.get("additionalProperties")
            and schema.get("type", "object") == "object"
        ):
            return name

    type_ = schema.get("type")
    if type_ is None:
        if "items" in schema:
            type_ = "Array"
        elif "properties" in schema:
            type_ = "Object"
        else:
            type_ = "Object"
            warnings.warn(
                f"Unknown type for schema: {schema} ({name or alternative_name})"
            )

    if type_ == "integer":
        return "number"
    elif type_ == "number":
        return "number"
    elif type_ == "string":
        format_ = schema.get("format")
        if format_ in {"date", "date-time"}:
            return "Date"
        elif format_ == "binary":
            return "any"
        return "string"
    elif type_ == "boolean":
        return "boolean"
    elif type_ == "array":
        return "[{}]".format(type_to_typescript(schema["items"]))
    elif type_ == "object":
        if "additionalProperties" in schema:
            return "{{ [key:string]:{}; }}".format(
                type_to_typescript(schema["additionalProperties"])
            )
        return (
            alternative_name
            if alternative_name
            and (
                "properties" in schema
                or "oneOf" in schema
                or "anyOf" in schema
                or "allOf" in schema
            )
            else "any"
        )
    elif type_ == "null":
        return "null"
    else:
        raise ValueError(f"Unknown type {type_}")


def get_type_for_attribute(schema, attribute, current_name=None):
    """Return Ruby type name for the attribute."""
    child_schema = schema.get("properties", {}).get(attribute)
    alternative_name = (
        current_name + formatter.camel_case(attribute) if current_name else None
    )
    return type_to_typescript(child_schema, alternative_name=alternative_name)


def get_type_for_parameter(parameter):
    """Return Ruby type name for the parameter."""
    if "content" in parameter:
        assert "in" not in parameter
        for content in parameter["content"].values():
            return type_to_typescript(content["schema"])
    return type_to_typescript(parameter.get("schema"))


def child_models(schema, alternative_name=None, seen=None):
    seen = seen or set()
    current_name = get_name(schema)
    name = current_name or alternative_name

    has_sub_models = False
    if "allOf" in schema:
        has_sub_models = True
        for child in schema["allOf"]:
            yield from child_models(child, seen=seen)
    if "oneOf" in schema:
        has_sub_models = True
        for child in schema["oneOf"]:
            yield from child_models(child, seen=seen)
    if "anyOf" in schema:
        has_sub_models = True
        for child in schema["anyOf"]:
            yield from child_models(child, seen=seen)

    if "items" in schema:
        yield from child_models(
            schema["items"],
            alternative_name=alternative_name + "Item"
            if alternative_name is not None
            else None,
            seen=seen,
        )

    if (
        schema.get("type") == "object" or "properties" in schema or has_sub_models
    ) and "additionalProperties" not in schema:
        if not has_sub_models and name is None:
            # this is a basic map object so we don't need a type
            return

        if name is None:
            raise ValueError(f"Schema {schema} has no name")

        if name in seen:
            return

        if "properties" in schema or has_sub_models:
            seen.add(name)
            yield name, schema

        for key, child in schema.get("properties", {}).items():
            yield from child_models(
                child, alternative_name=name + formatter.camel_case(key), seen=seen
            )

    if "enum" in schema:
        if name is None:
            raise ValueError(f"Schema {schema} has no name")

        if name in seen:
            return

        seen.add(name)
        yield name, schema

    if "additionalProperties" in schema:
        nested_name = get_name(schema["additionalProperties"])
        if nested_name:
            yield from child_models(
                schema["additionalProperties"],
                alternative_name=name,
                seen=seen,
            )


def models(spec):
    name_to_schema = {}

    for path in spec["paths"]:
        for method in spec["paths"][path]:
            operation = spec["paths"][path][method]

            for content in operation.get("parameters", []):
                if "schema" in content:
                    name_to_schema.update(dict(child_models(content["schema"])))

            for content in operation.get("requestBody", {}).get("content", {}).values():
                if "schema" in content:
                    name_to_schema.update(dict(child_models(content["schema"])))

            for response in operation.get("responses", {}).values():
                for content in response.get("content", {}).values():
                    if "schema" in content:
                        name_to_schema.update(dict(child_models(content["schema"])))

    return name_to_schema


def apis(spec):
    operations = {}

    for path in spec["paths"]:
        for method in spec["paths"][path]:
            operation = spec["paths"][path][method]
            tag = operation.get("tags", [None])[0]
            operations.setdefault(tag, []).append((path, method, operation))

    return operations


def operation(spec, operation_id):
    for path in spec["paths"]:
        for method in spec["paths"][path]:
            operation = spec["paths"][path][method]
            if operation["operationId"] == operation_id:
                return operation
    return None


def parameters(operation):
    for content in operation.get("parameters", []):
        if "schema" in content:
            yield content["name"], content

    if "requestBody" in operation:
        if "multipart/form-data" in operation["requestBody"]["content"]:
            parent = operation["requestBody"]["content"]["multipart/form-data"][
                "schema"
            ]
            for name, schema in parent["properties"].items():
                yield name, {
                    "in": "form",
                    "schema": schema,
                    "name": name,
                    "description": schema.get("description"),
                    "required": name in parent.get("required", []),
                }
        else:
            name = operation.get("x-codegen-request-body-name", "body")
            yield name, operation["requestBody"]


def parameter_schema(parameter):
    if "schema" in parameter:
        return parameter["schema"]
    if "content" in parameter:
        for content in parameter.get("content", {}).values():
            if "schema" in content:
                return content["schema"]
    raise ValueError(f"Unknown schema for parameter {parameter}")

def get_type_for_response(response):
    """Return Typescript type name for the response."""
    if "content" in response:
        for content in response["content"].values():
            if "schema" in content:
                return type_to_typescript(content["schema"])

def return_type(operation):
    for response in operation.get("responses", {}).values():
        for content in response.get("content", {}).values():
            if "schema" in content:
                return type_to_typescript(content["schema"])
        return


def accept_headers(operation):
    any_type = "*/*"
    seen = []
    for response in operation.get("responses", {}).values():
        if "content" in response:
            for media_type in response["content"].keys():
                if media_type not in seen:
                    seen.append(media_type)
        else:
            return [any_type]
    return seen


def collection_format(parameter):
    in_to_style = {
        "query": "form",
        "path": "simple",
        "header": "simple",
        "cookie": "form",
    }
    schema = parameter_schema(parameter)
    matrix = {
        ("form", False): "csv",
        ("form", True): "multi",
        # TODO add more cases from https://swagger.io/specification/#parameter-style
    }
    if schema.get("type") == "array" or "items" in schema:
        in_ = parameter.get("in", "query")
        style = parameter.get("style", in_to_style[in_])
        explode = parameter.get("explode", True if style == "form" else False)
        return matrix.get((style, explode), "multi")


def format_server(server, server_variables=None, path=""):
    url = server["url"] + path
    # replace potential path variables
    for variable, value in (server_variables or {}).items():
        url = url.replace("{" + variable + "}", value)
    # replace server variables if they were not replace before
    for variable in server["variables"]:
        if server_variables and variable in server_variables:
            continue
        url = url.replace(
            "{" + variable + "}", server["variables"][variable]["default"]
        )
    return urlparse(url)


def server_url_and_method(spec, operation_id, server_index=0, server_variables=None):
    for path in spec["paths"]:
        for method in spec["paths"][path]:
            operation = spec["paths"][path][method]
            if operation["operationId"] == operation_id:
                if "servers" in operation:
                    server = operation["servers"][server_index]
                else:
                    server = spec["servers"][server_index]
                return (
                    format_server(
                        server, server_variables=server_variables, path=path
                    ).geturl(),
                    method,
                )

    raise ValueError(f"Operation {operation_id} not found")


def response_code_and_accept_type(operation, status_code=None):
    for response in operation["responses"]:
        if status_code is None:
            return int(response), next(
                iter(operation["responses"][response].get("content", {None: None}))
            )
        if response == str(status_code):
            return status_code, next(
                iter(operation["responses"][response].get("content", {None: None}))
            )
    return status_code, None


def request_content_type(operation, status_code=None):
    return next(iter(operation.get("requestBody", {}).get("content", {None: None})))


def response(operation, status_code=None):
    for response in operation["responses"]:
        if status_code is None or response == str(status_code):
            return list(operation["responses"][response]["content"].values())[0][
                "schema"
            ]
    return None

def get_api_models(operations):
    seen = set()
    for _, _, operation in operations:
        for response in operation.get("responses", {}).values():
            for content in response.get("content", {}).values():
                if "schema" in content:
                    name = formatter.get_name(content["schema"])
                    if name and name not in seen:
                        seen.add(name)
                        yield name
                    elif "items" in content["schema"]:
                        name = formatter.get_name(content["schema"]["items"])
                        if name and name not in seen:
                            seen.add(name)
                            yield name
            break
        for content in operation.get("parameters", []):
            if "schema" in content and (
                content["schema"].get("type") in ("object", "array") or content["schema"].get("enum")
            ):
                name = formatter.get_name(content["schema"])
                if name and name not in seen:
                    seen.add(name)
                    yield name
                elif "items" in content["schema"]:
                    name = formatter.get_name(content["schema"]["items"])
                    if name and name not in seen:
                        seen.add(name)
                        yield name
        if "requestBody" in operation:
            for content in operation["requestBody"].get("content", {}).values():
                if "schema" in content:
                    name = formatter.get_name(content["schema"])
                    if name and name not in seen:
                        seen.add(name)
                        yield name
