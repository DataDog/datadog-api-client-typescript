/**
 * List source maps returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.listSourcemaps"] = true;
const apiInstance = new v2.RUMApi(configuration);

const params: v2.RUMApiListSourcemapsRequest = {
  mapkind: "wasm",
  symbolType: "sourcemap",
  filterService: ["my-wasm-app"],
  filterVersion: ["1.0.0"],
};

apiInstance
  .listSourcemaps(params)
  .then((data: v2.ListSourcemapsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
