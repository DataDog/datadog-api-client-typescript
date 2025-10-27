/**
 * List threat hunting jobs returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listThreatHuntingJobs"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

apiInstance
  .listThreatHuntingJobs()
  .then((data: v2.ListThreatHuntingJobsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
