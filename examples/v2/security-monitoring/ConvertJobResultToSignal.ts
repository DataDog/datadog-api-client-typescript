/**
 * Convert a job result to a signal returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiConvertJobResultToSignalRequest = {
  body: {
    data: {
      attributes: {
        jobResultIds: [""],
        notifications: [""],
        signalMessage: "A large number of failed login attempts.",
        signalSeverity: "critical",
      },
      type: "historicalDetectionsJobResultSignalConversion",
    },
  },
};

apiInstance
  .convertJobResultToSignal(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
