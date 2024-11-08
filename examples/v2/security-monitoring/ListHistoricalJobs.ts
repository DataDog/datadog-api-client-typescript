/**
 * List historical jobs returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.runHistoricalJob"] = true;
configuration.unstableOperations["v2.listHistoricalJobs"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "historical_job" in the system

const params: v2.SecurityMonitoringApiListHistoricalJobsRequest = {
  filterQuery: "id:string",
};

apiInstance
  .listHistoricalJobs(params)
  .then((data: v2.ListHistoricalJobsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
