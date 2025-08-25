/**
 * Get all processes returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ProcessesApi(configuration);

const params: v2.ProcessesApiListProcessesRequest = {
  search: "process-agent",
  tags: "testing:true",
  pageLimit: 2,
};

apiInstance
  .listProcesses(params)
  .then((data: v2.ProcessSummariesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
