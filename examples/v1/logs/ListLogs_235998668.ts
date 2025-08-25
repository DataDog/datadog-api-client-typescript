/**
 * Search test logs returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.LogsApi(configuration);

const params: v1.LogsApiListLogsRequest = {
  body: {
    index: "main",
    query: "host:Test*",
    sort: "asc",
    time: {
      from: new Date(new Date().getTime() + -1 * 3600 * 1000),
      timezone: "Europe/Paris",
      to: new Date(),
    },
  },
};

apiInstance
  .listLogs(params)
  .then((data: v1.LogsListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
