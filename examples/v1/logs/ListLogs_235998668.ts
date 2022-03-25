/**
 * Search test logs returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.LogsApi(configuration);

const params: v1.LogsApiListLogsRequest = {
  body: {
    index: "main",
    query: "service:web*",
    sort: "asc",
    time: {
      from: new Date(new Date().getTime() / 1000 + -1 * 3600),
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
