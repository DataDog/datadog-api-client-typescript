/**
 * Get investigation feedback returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getInvestigationFeedback"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiGetInvestigationFeedbackRequest = {
  signalId: "signal_id",
};

apiInstance
  .getInvestigationFeedback(params)
  .then((data: v2.SecurityMonitoringSignalInvestigationFeedbackResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
