/**
 * Post vulnerable symbols returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.postSCAResolveVulnerableSymbols"] = true;
const apiInstance = new v2.StaticAnalysisApi(configuration);

const params: v2.StaticAnalysisApiPostSCAResolveVulnerableSymbolsRequest = {
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
  .postSCAResolveVulnerableSymbols(params)
  .then((data: v2.ResolveVulnerableSymbolsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
