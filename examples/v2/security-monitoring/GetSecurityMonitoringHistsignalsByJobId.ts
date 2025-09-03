/**
 * Get a job's hist signals returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getSecurityMonitoringHistsignalsByJobId"] =
  true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiGetSecurityMonitoringHistsignalsByJobIdRequest =
  {
    jobId: "job_id",
  };

apiInstance
  .getSecurityMonitoringHistsignalsByJobId(params)
  .then((data: v2.SecurityMonitoringSignalsListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
