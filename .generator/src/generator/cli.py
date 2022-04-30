import pathlib

import click
from jinja2 import Environment, FileSystemLoader

from . import openapi
from . import formatter

package_name = "datadog-api-client"
npm_name = "@datadog/datadog-api-client"

@click.command()
@click.option(
    "-i",
    "--input",
    type=click.Path(
        exists=True, file_okay=True, dir_okay=False, path_type=pathlib.Path
    ),
)
@click.option(
    "-o",
    "--output",
    type=click.Path(path_type=pathlib.Path),
)
def cli(input, output):
    """
    Generate a Typescript code snippet from OpenAPI specification.
    """
    spec = openapi.load(input)

    version = input.parent.name

    env = Environment(
        loader=FileSystemLoader(str(pathlib.Path(__file__).parent / "templates"))
    )

    env.filters["accept_headers"] = openapi.accept_headers
    env.filters["attribute_name"] = formatter.attribute_name
    env.filters["block_comment"] = formatter.block_comment
    env.filters["camel_case"] = formatter.camel_case
    env.filters["collection_format"] = openapi.collection_format
    env.filters["format_server"] = openapi.format_server
    env.filters["format_value"] = formatter.format_value
    env.filters["parameter_schema"] = openapi.parameter_schema
    env.filters["parameters"] = openapi.parameters
    env.filters["return_type"] = openapi.return_type
    env.filters["snake_case"] = formatter.snake_case
    env.filters["form_parameter"] = openapi.form_parameter
    env.filters["untitle_case"] = formatter.untitle_case
    env.filters["response_type"] = openapi.get_type_for_response


    env.globals["get_references_for_model"] = openapi.get_references_for_model
    env.globals["get_required_parameters"] = openapi.get_required_parameters
    env.globals["package_name"] = package_name
    env.globals["npm_name"] = npm_name
    env.globals["enumerate"] = enumerate
    env.globals["version"] = version
    env.globals["openapi"] = spec
    env.globals["get_name"] = openapi.get_name
    env.globals["type_to_typescript"] = openapi.type_to_typescript
    env.globals["get_type_for_attribute"] = openapi.get_type_for_attribute
    env.globals["get_type_for_parameter"] = openapi.get_type_for_parameter
    env.globals["get_api_models"] = openapi.get_api_models
    env.globals["response"] = openapi.response
    env.globals["get_enums_list"] = openapi.get_enums_list

    api_j2 = env.get_template("api/api.j2")
    model_j2 = env.get_template("model/model.j2")
    configuration_j2 = env.get_template("configuration.j2")
    servers_j2 =  env.get_template("servers.j2")

    extra_files = {
        "util.ts": env.get_template("util.j2"),
        "apis/baseapi.ts": env.get_template("api/baseapi.j2"),
        "apis/exception.ts": env.get_template("api/exception.j2"),
        "auth/auth.ts": env.get_template("auth/auth.j2"),
        "models/ObjectSerializer.ts": env.get_template("model/ObjectSerializer.j2"),
        "http/http.ts": env.get_template("http/http.j2"),
        "http/isomorphic-fetch.ts": env.get_template("http/isomorphic-fetch.j2"),
        "index.ts": env.get_template("index.j2")
    }

    apis = openapi.apis(spec)
    models = openapi.models(spec)

    package_path = output / f"{package_name}-{version}"

    for name, model in models.items():
        filename = formatter.camel_case(name) + ".ts"
        model_path = package_path / "models" / filename
        model_path.parent.mkdir(parents=True, exist_ok=True)
        with model_path.open("w+") as fp:
            fp.write(model_j2.render(name=name, model=model))

    for name, operations in apis.items():
        filename = formatter.camel_case(name) + "Api.ts"
        api_path = package_path / "apis" / filename
        api_path.parent.mkdir(parents=True, exist_ok=True)
        with api_path.open("w+") as fp:
            fp.write(api_j2.render(name=name, operations=operations, models=models))



    for name, template in extra_files.items():
        filename = package_path / name
        filename.parent.mkdir(parents=True, exist_ok=True)
        with filename.open("w+") as fp:
            fp.write(template.render(apis=apis, models=models))

    configuration_path = package_path / "configuration.ts"
    with configuration_path.open("w+") as fp:
        fp.write(configuration_j2.render())

    servers_path = package_path / "servers.ts"
    with servers_path.open("w+") as fp:
        fp.write(servers_j2.render(apis=apis, operations=operations))

