/**
 * Cancel a historical job returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.cancelHistoricalJob"] = true;
configuration.unstableOperations["v2.runHistoricalJob"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "historical_job" in the system
const HISTORICAL_JOB_DATA_ID = process.env.HISTORICAL_JOB_DATA_ID as string;

const params: v2.SecurityMonitoringApiCancelHistoricalJobRequest = {
  jobId: HISTORICAL_JOB_DATA_ID,
};

apiInstance
  .cancelHistoricalJob(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));