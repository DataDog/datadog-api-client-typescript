"""Data formatter."""
import pathlib
import json
import re
from functools import singledispatch

import dateutil.parser


KEYWORDS = {
    "abstract",
    "await",
    "boolean",
    "break",
    "byte",
    "case",
    "catch",
    "char",
    "class",
    "const",
    "continue",
    "debugger",
    "default",
    "delete",
    "do",
    "double",
    "else",
    "enum",
    "export",
    "extends",
    "false",
    "final",
    "finally",
    "float",
    "for",
    "function",
    "goto",
    "if",
    "implements",
    "import",
    "in",
    "instanceof",
    "int",
    "interface",
    "let",
    "long",
    "native",
    "new",
    "null",
    "package",
    "private",
    "protected",
    "public",
    "return",
    "short",
    "static",
    "super",
    "switch",
    "synchronized",
    "this",
    "throw",
    "transient",
    "true",
    "try",
    "typeof",
    "var",
    "void",
    "volatile",
    "while",
    "with",
    "yield",
}

with (pathlib.Path(__file__).parent / "replacement.json").open() as f:
    EDGE_CASES = json.load(f)

PATTERN_DOUBLE_UNDERSCORE = re.compile(r"__+")
PATTERN_LEADING_ALPHA = re.compile(r"(.)([A-Z][a-z]+)")
PATTERN_FOLLOWING_ALPHA = re.compile(r"([a-z0-9])([A-Z])")
PATTERN_WHITESPACE = re.compile(r"\W")


def snake_case(value):
    for token, replacement in EDGE_CASES.items():
        value = value.replace(token, replacement)
    s1 = PATTERN_LEADING_ALPHA.sub(r"\1_\2", value)
    s1 = PATTERN_FOLLOWING_ALPHA.sub(r"\1_\2", s1).lower()
    s1 = PATTERN_WHITESPACE.sub("_", s1)
    s1 = s1.rstrip("_")
    return PATTERN_DOUBLE_UNDERSCORE.sub("_", s1)


def block_comment(comment, prefix="//"):
    return "\n".join(f"{prefix} {line}".rstrip() for line in comment.split("\n"))


def upperfirst(value):
    return value[0].upper() + value[1:]


def camel_case(value):
    return "".join(upperfirst(x) for x in snake_case(value).split("_"))


def untitle_case(value):
    return value[0].lower() + value[1:]


def schema_name(schema):
    if not schema:
        return None

    if hasattr(schema, "__reference__"):
        return schema.__reference__["$ref"].split("/")[-1]


def given_variables(context):
    """Return a list of variables using in given steps."""
    return {key for values in context.get("_given", {}).values() for key in values}


def escape_reserved_keyword(word):
    """
    Escape reserved language keywords like openapi generator does it
    :param word: Word to escape
    :return: The escaped word if it was a reserved keyword, the word unchanged otherwise
    """
    if word in KEYWORDS:
        return f"_{word}"
    return word


def attribute_name(attribute):
    if attribute.isupper():
        return attribute
    return escape_reserved_keyword(untitle_case(camel_case(attribute)))


def attribute_path(attribute):
    return ".".join(attribute_name(a) for a in attribute.split("."))


def format_value(value, quotes="'"):
    if isinstance(value, str):
        return f"{quotes}{value}{quotes}"
    elif isinstance(value, bool):
        return "true" if value else "false"
    return value


def format_parameters(kwargs, spec, replace_values=None, has_body=False):
    parameters_spec = {p["name"]: p for p in spec.get("parameters", [])}
    if "requestBody" in spec and "multipart/form-data" in spec["requestBody"]["content"]:
        parent = spec["requestBody"]["content"]["multipart/form-data"]["schema"]
        for name, schema in parent["properties"].items():
            parameters_spec[name] = {
                "in": "form",
                "schema": schema,
                "name": name,
                "description": schema.get("description"),
                "required": name in parent.get("required", []),
            }

    parameters = ""
    for p in parameters_spec.values():
        k = p["name"]
        if k not in kwargs:
            continue
        v = kwargs[k]
        value = format_data_with_schema(
            v["value"],
            p["schema"],
            replace_values=replace_values,
        )
        parameters += f"{attribute_name(k)}: {value},\n"

    return parameters


def _format_oneof(data, schema, replace_values=None):
    parameters = ""
    matched = 0
    for sub_schema in schema["oneOf"]:
        try:
            if "items" in sub_schema and not isinstance(data, list):
                continue
            if sub_schema.get("nullable") and data is None:
                # only one schema can be nullable
                formatted = "nil"
            else:
                sub_schema["nullable"] = False
                formatted = format_data_with_schema(
                    data,
                    sub_schema,
                    replace_values=replace_values,
                )
            if matched == 0:
                # NOTE we do not support mixed schemas with oneOf
                # parameters += formatted
                parameters = formatted
            matched += 1
        except (KeyError, ValueError, TypeError):
            pass

    if matched != 1:
        raise ValueError(f"[{matched}] {data} is not valid for schema")

    return parameters


def get_name(schema):
    name = None
    if hasattr(schema, "__reference__"):
        name = schema.__reference__["$ref"].split("/")[-1]
    return name


@singledispatch
def format_data_with_schema(
    data,
    schema,
    replace_values=None,
    required=False,
):
    if not schema:
        return ""

    nullable = schema.get("nullable", False)

    if "enum" in schema:
        if nullable and data is None:
            pass
        elif data not in schema["enum"]:
            raise ValueError(f"{data} is not valid enum value {schema['enum']}")

    if replace_values and data in replace_values:
        # TODO convert replaced value if it is not string and it is used in given
        parameters = replace_values[data]
    else:
        if nullable and data is None:
            parameters = "null" if required else "undefined"
        else:
            if "oneOf" in schema:
                return _format_oneof(data, schema, replace_values=replace_values)

            def format_string(x):
                if "`" in x:
                    x = re.sub(r"(`+)", r'` + "\1" + `', x)
                if x and ('"' in x):
                    x = f"`{x}`"
                    x = re.sub(r" \+ ``$", "", x)
                    return x
                return repr(x)

            def format_datetime(x):
                d = dateutil.parser.isoparse(x)
                return f"new Date({d.year}, {d.month}, {d.day}, {d.hour}, {d.minute}, {d.second}, {d.microsecond})"

            schema = schema.copy()

            def format_interface(x):
                if isinstance(x, (int, float)):
                    return str(x)
                if isinstance(x, str):
                    return format_string(x)
                raise TypeError(f"{x} is not supported type {schema}")

            def format_number(x):
                if isinstance(x, (bool, str)):
                    raise TypeError(f"{x} is not supported type {schema}")
                return str(x)

            def format_boolean(x):
                if not isinstance(x, bool):
                    raise TypeError(f"{x} is not supported type {schema}")
                return "true" if x else "false"

            formatter = {
                "int32": format_number,
                "int64": format_number,
                "double": format_number,
                "date-time": format_datetime,
                "number": format_number,
                "integer": format_number,
                "boolean": format_boolean,
                "email": format_string,
                "binary": lambda x: f'{{"data": Buffer.from(fs.readFileSync({format_string(x)}, "utf8")), "name": {format_string(x)}}}',
                "string": format_string,
                "uuid": format_string,
                "url": format_string,
                None: format_interface,
            }[schema.get("format", schema.get("type"))]

            parameters = formatter(data)

    return parameters


@format_data_with_schema.register(list)
def format_data_with_schema_list(
    data,
    schema,
    replace_values=None,
    required=False,
):
    if not schema:
        return ""

    if "oneOf" in schema:
        return _format_oneof(data, schema, replace_values=replace_values)

    parameters = ""
    for d in data:
        value = format_data_with_schema(
            d,
            schema["items"],
            replace_values=replace_values,
        )
        parameters += f"{value},\n"

    return f"[\n{parameters}]"


@format_data_with_schema.register(dict)
def format_data_with_schema_dict(
    data,
    schema,
    replace_values=None,
    required=False,
):
    if not schema:
        return ""

    parameters = ""
    if "properties" in schema:
        required_properties = set(schema.get("required", []))
        missing = required_properties - set(data.keys())
        if missing:
            raise ValueError(f"missing required properties: {missing}")
        additionalProperties = set(data.keys()) - set(schema["properties"].keys())
        if schema.get("additionalProperties") == False and additionalProperties:
            raise ValueError(f"additional properties not allowed: {additionalProperties}")

        for k, v in data.items():
            if k not in schema["properties"]:
                continue
            value = format_data_with_schema(
                v,
                schema["properties"][k],
                replace_values=replace_values,
                required=k in required_properties,
            )
            parameters += f"{attribute_name(k)}: {value},\n"

    if schema.get("additionalProperties"):
        saved_parameters = ""
        if schema.get("properties"):
            saved_parameters = parameters
            parameters = ""
        nested_schema = schema["additionalProperties"]
        nested_schema_name = simple_type(nested_schema)
        if not nested_schema_name:
            nested_schema_name = schema_name(nested_schema)

        has_properties = schema.get("properties")

        for k, v in data.items():
            if has_properties and k in schema["properties"]:
                continue
            value = format_data_with_schema(
                v,
                schema["additionalProperties"],
                replace_values=replace_values,
                required=True,
            )
            parameters += f'"{k}": {value},\n'

            # IMPROVE: find a better way to get nested schema name
            if not nested_schema_name:
                nested_schema_name = value.split("{")[0]

        if has_properties:
            if parameters:
                parameters = f"{saved_parameters}additionalProperties: {{\n{parameters}}},\n"
            else:
                parameters = saved_parameters

        return f"{{\n{parameters}}}"

    if "oneOf" in schema:
        return _format_oneof(data, schema, replace_values=replace_values)

    if schema.get("type") == "object" and "properties" not in schema and schema.get("additionalProperties") == {}:
        for k, v in data.items():
            parameters += f'"{k}": "{v}",\n'

    if parameters == "" and data:
        raise ValueError(f"No schema matched for {data}")

    return f"{{\n{parameters}}}"


def docstring(text, indent=3):
    if not text:
        return ""
    blank = " " * indent
    return "\n".join("{}* {}".format(blank, line) for line in text.splitlines())


def simple_type(schema):
    """Return the simple type of a schema.

    :param schema: The schema to extract the type from
    :return: The simple type name
    """
    if "enum" in schema:
        # enums have named types in Typescript client
        return None

    type_name = schema.get("type")
    type_format = schema.get("format")

    if type_name in {"integer", "number"}:
        return "number"
    if type_name == "string":
        return {
            "date": "Date",
            "date-time": "Date",
            "email": "string",
            None: "string",
        }[type_format]

    if type_name == "boolean":
        return "boolean"


def get_response_type(schema, version):
    if "content" not in schema:
        return None

    response_schema = list(schema["content"].values())[0]["schema"]
    if response_schema.get("format") == "binary":
        return "client.HttpFile"

    if response_schema.get("type") == "array":
        nested_schema = response_schema.get("items")
        name = schema_name(nested_schema)
        if name:
            name = f"{version}.{name}"
        else:
            name = simple_type(nested_schema)
        api_response_type = f"{name}[]"
    else:
        name = schema_name(response_schema)
        api_response_type = f"{version}.{name}" if name else simple_type(response_schema)
    return api_response_type
