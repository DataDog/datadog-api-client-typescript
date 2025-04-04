import pathlib

import click
from jinja2 import Environment, FileSystemLoader

from . import openapi
from . import formatter

package_name = "datadog-api-client"
npm_name = "@datadog/datadog-api-client"


@click.command()
@click.argument(
    "specs",
    nargs=-1,
    type=click.Path(exists=True, file_okay=True, dir_okay=False, path_type=pathlib.Path),
)
@click.option(
    "-o",
    "--output",
    type=click.Path(path_type=pathlib.Path),
)
def cli(specs, output):
    """
    Generate a Typescript code snippet from OpenAPI specification.
    """

    env = Environment(loader=FileSystemLoader(str(pathlib.Path(__file__).parent / "templates")))

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
    env.filters["responses_by_types"] = openapi.responses_by_types
    env.filters["docstring"] = formatter.docstring

    env.globals["get_references_for_model"] = openapi.get_references_for_model
    env.globals["package_name"] = package_name
    env.globals["npm_name"] = npm_name
    env.globals["enumerate"] = enumerate
    env.globals["get_name"] = openapi.get_name
    env.globals["type_to_typescript"] = openapi.type_to_typescript
    env.globals["get_type_for_attribute"] = openapi.get_type_for_attribute
    env.globals["get_type_for_parameter"] = openapi.get_type_for_parameter
    env.globals["get_format_for_schema"] = openapi.get_format_for_schema
    env.globals["get_api_models"] = openapi.get_api_models
    env.globals["response"] = openapi.response
    env.globals["get_enums_list"] = openapi.get_enums_list
    env.globals["get_format"] = openapi.get_format
    env.globals["get_default"] = openapi.get_default
    env.globals["get_container"] = openapi.get_container
    env.globals["get_container_type"] = openapi.get_container_type
    env.globals["get_type_at_path"] = openapi.get_type_at_path

    api_j2 = env.get_template("api/api.j2")
    model_j2 = env.get_template("model/model.j2")

    extra_files = {
        "models/ObjectSerializer.ts": env.get_template("model/ObjectSerializer.j2"),
        "index.ts": env.get_template("index.j2"),
    }

    test_scenarios_files = {
        "scenarios_model_mapping.ts": env.get_template("scenarios_model_mapping.j2")
    }

    all_specs = {}
    all_apis = {}
    for spec_path in specs:
        spec = openapi.load(spec_path)

        version = spec_path.parent.name

        env.globals["version"] = version
        env.globals["openapi"] = spec

        all_specs[version] = spec

        apis = openapi.apis(spec)
        models = openapi.models(spec)

        all_apis[version] = apis

        package_path = output / f"{package_name}-{version}"

        for name, model in models.items():
            filename = name + ".ts"
            model_path = package_path / "models" / filename
            model_path.parent.mkdir(parents=True, exist_ok=True)
            with model_path.open("w+") as fp:
                fp.write(model_j2.render(name=name, model=model))

        for name, operations in apis.items():
            filename = name.replace(" ", "").replace("-", "") + "Api.ts"
            api_path = package_path / "apis" / filename
            api_path.parent.mkdir(parents=True, exist_ok=True)
            with api_path.open("w+") as fp:
                fp.write(api_j2.render(name=name, operations=operations, models=models))

        for name, template in extra_files.items():
            filename = package_path / name
            filename.parent.mkdir(parents=True, exist_ok=True)
            with filename.open("w+") as fp:
                fp.write(template.render(apis=apis, models=models))

    common_files = {
        "util.ts": env.get_template("util.j2"),
        "baseapi.ts": env.get_template("api/baseapi.j2"),
        "exception.ts": env.get_template("api/exception.j2"),
        "auth.ts": env.get_template("auth/auth.j2"),
        "http/http.ts": env.get_template("http/http.j2"),
        "http/isomorphic-fetch.ts": env.get_template("http/isomorphic-fetch.j2"),
        "servers.ts": env.get_template("servers.j2"),
        "configuration.ts": env.get_template("configuration.j2"),
        "index.ts": env.get_template("common_index.j2"),
    }

    for name, template in common_files.items():
        filename = output / "datadog-api-client-common" / name
        filename.parent.mkdir(parents=True, exist_ok=True)
        with filename.open("w+") as fp:
            fp.write(template.render(apis=all_apis))

    # Parameter mappings for bdd tests
    scenarios_test_output = pathlib.Path("../features/support/")
    for name, template in test_scenarios_files.items():
        filename = scenarios_test_output / name
        with filename.open("w") as fp:
            fp.write(template.render(all_apis=all_apis))
