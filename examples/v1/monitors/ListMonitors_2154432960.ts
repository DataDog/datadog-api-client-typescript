/**
 * Get all monitors with tags
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

const params: v1.MonitorsApiListMonitorsRequest = {
  tags: "test:examplemonitor",
  pageSize: 1,
};

apiInstance
  .listMonitors(params)
  .then((data: v1.Monitor[]) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
