/**
 * Cancel a historical job returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.cancelThreatHuntingJob"] = true;
configuration.unstableOperations["v2.runThreatHuntingJob"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "threat_hunting_job" in the system
const THREAT_HUNTING_JOB_DATA_ID = process.env
  .THREAT_HUNTING_JOB_DATA_ID as string;

const params: v2.SecurityMonitoringApiCancelThreatHuntingJobRequest = {
  jobId: THREAT_HUNTING_JOB_DATA_ID,
};

apiInstance
  .cancelThreatHuntingJob(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
