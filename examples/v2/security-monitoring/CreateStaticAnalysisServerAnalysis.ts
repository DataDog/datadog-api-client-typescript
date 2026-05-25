/**
 * Analyze code returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createStaticAnalysisServerAnalysis"] =
  true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateStaticAnalysisServerAnalysisRequest =
  {
    body: {
      data: {
        attributes: {
          code: "aW1wb3J0IHN5cw==",
          fileEncoding: "utf-8",
          filename: "test.py",
          language: "python",
          rules: [
            {
              category: "BEST_PRACTICES",
              checksum: "abc123def456",
              code: "ZnVuY3Rpb24gdmlzaXQobm9kZSkge30=",
              entityChecked: undefined,
              id: "python-best-practices/no-exit",
              language: "python",
              regex: undefined,
              severity: "WARNING",
              treeSitterQuery: "KGNhbGwgbmFtZTogKGF0dHJpYnV0ZSkpQHZhbA==",
              type: "TREE_SITTER_QUERY",
            },
          ],
        },
        type: "analysis_request",
      },
    },
  };

apiInstance
  .createStaticAnalysisServerAnalysis(params)
  .then((data: v2.AnalysisResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
