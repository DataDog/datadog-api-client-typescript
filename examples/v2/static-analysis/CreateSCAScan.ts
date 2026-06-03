/**
 * Submit libraries for vulnerability scanning returns "Accepted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createSCAScan"] = true;
const apiInstance = new v2.StaticAnalysisApi(configuration);

const params: v2.StaticAnalysisApiCreateSCAScanRequest = {
  body: {
    data: {
      attributes: {
        commitHash: "0e9fc8de83eaabecd722e1cd0ed44fb489fe15fc",
        libraries: [
          {
            exclusions: [],
            isDev: false,
            isDirect: true,
            packageManager: "nuget",
            purl: "pkg:nuget/Newtonsoft.Json@13.0.1",
            targetFrameworks: [],
          },
        ],
        resourceName: "my-org/my-repo",
      },
      type: "mcpscanrequest",
    },
  },
};

apiInstance
  .createSCAScan(params)
  .then((data: v2.McpScanRequestResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
