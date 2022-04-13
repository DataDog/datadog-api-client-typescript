/**
 * Create an index returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.LogsIndexesApi(configuration);

const params: v1.LogsIndexesApiCreateLogsIndexRequest = {
  body: {
    dailyLimit: 300000000,
    exclusionFilters: [
      {
        filter: {
          query: "*",
          sampleRate: 1.0,
        },
        name: "payment",
      },
    ],
    filter: {
      query: "source:python",
    },
    name: "main",
    numRetentionDays: 15,
  },
};

apiInstance
  .createLogsIndex(params)
  .then((data: v1.LogsIndex) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
