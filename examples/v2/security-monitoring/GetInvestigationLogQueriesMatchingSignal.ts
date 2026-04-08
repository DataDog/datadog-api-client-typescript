/**
 * Get investigation queries for a signal returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiGetInvestigationLogQueriesMatchingSignalRequest =
  {
    signalId: "AQAAAYG1bl5K4HuUewAAAABBWUcxYmw1S0FBQmt2RmhRN0V4ZUVnQUE",
  };

apiInstance
  .getInvestigationLogQueriesMatchingSignal(params)
  .then((data: v2.SecurityMonitoringSignalSuggestedActionsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
