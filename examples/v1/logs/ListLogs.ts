/**
 * Search logs returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.LogsApi(configuration);

const params: v1.LogsApiListLogsRequest = {
  body: {
    index: "retention-3,retention-15",
    query: "service:web* AND @http.status_code:[200 TO 299]",
    sort: "asc",
    time: {
      from: new Date(2020, 2, 2, 2, 2, 2, 202000),
      to: new Date(2020, 2, 20, 2, 2, 2, 202000),
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
