/**
 * Post dependencies for analysis returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createSCAResult"] = true;
const apiInstance = new v2.StaticAnalysisApi(configuration);

const params: v2.StaticAnalysisApiCreateSCAResultRequest = {
  body: {
    data: {
      attributes: {
        commit: {},
        dependencies: [
          {
            exclusions: [],
            locations: [
              {
                block: {
                  end: {},
                  start: {},
                },
                name: {
                  end: {},
                  start: {},
                },
                namespace: {
                  end: {},
                  start: {},
                },
                version: {
                  end: {},
                  start: {},
                },
              },
            ],
            reachableSymbolProperties: [{}],
          },
        ],
        files: [{}],
        relations: [
          {
            dependsOn: [],
          },
        ],
        repository: {},
        vulnerabilities: [
          {
            affects: [{}],
          },
        ],
      },
      type: "scarequests",
    },
  },
};

apiInstance
  .createSCAResult(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
