/**
 * Search logs returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.LogsApi(configuration);

const params: v2.LogsApiListLogsRequest = {
  body: {
    filter: {
      query: "datadog-agent",
      indexes: ["main"],
      from: "2020-09-17T11:48:36+01:00",
      to: "2020-09-17T12:48:36+01:00",
    },
    sort: "timestamp",
    page: {
      limit: 5,
    },
  },
};

apiInstance
  .listLogs(params)
  .then((data: v2.LogsListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
