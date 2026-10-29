/**
 * Restore source maps returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.restoreSourcemaps"] = true;
const apiInstance = new v2.RUMApi(configuration);

const params: v2.RUMApiRestoreSourcemapsRequest = {
  mapkind: "wasm",
  symbolType: "sourcemap",
  dryRun: true,
  filterService: ["nonexistent-svc"],
  filterVersion: ["0.0.0-none"],
};

apiInstance
  .restoreSourcemaps(params)
  .then((data: v2.SourcemapsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
