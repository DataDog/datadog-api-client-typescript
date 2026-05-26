/**
 * Get AST for source code returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createStaticAnalysisAst"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateStaticAnalysisAstRequest = {
  body: {
    data: {
      attributes: {
        code: "aW1wb3J0IHN5cw==",
        fileEncoding: "utf-8",
        language: "python",
      },
      type: "get_ast_request",
    },
  },
};

apiInstance
  .createStaticAnalysisAst(params)
  .then((data: v2.GetAstResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
