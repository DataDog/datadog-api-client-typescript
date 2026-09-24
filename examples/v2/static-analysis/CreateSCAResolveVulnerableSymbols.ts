/**
 * POST request to resolve vulnerable symbols returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.createSCAResolveVulnerableSymbols"] = true;
const apiInstance = new v2.StaticAnalysisApi(configuration);

const params: v2.StaticAnalysisApiCreateSCAResolveVulnerableSymbolsRequest = {
  body: {
    data: {
      attributes: {
        purls: [],
      },
      type: "resolve-vulnerable-symbols-request",
    },
  },
};

apiInstance
  .createSCAResolveVulnerableSymbols(params)
  .then((data: v2.ResolveVulnerableSymbolsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
