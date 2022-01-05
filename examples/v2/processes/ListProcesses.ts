/**
 * Get all processes returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.ProcessesApi(configuration);

let params: v2.ProcessesApiListProcessesRequest = {
  search: "process-agent",
tags: "testing:true",
pageLimit: 2,

};

apiInstance
  .listProcesses(params)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
  })
  .catch((error: any) => console.error(error));