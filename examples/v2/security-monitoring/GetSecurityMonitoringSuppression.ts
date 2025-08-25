/**
 * Get a suppression rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "suppression" in the system
const SUPPRESSION_DATA_ID = process.env.SUPPRESSION_DATA_ID as string;

const params: v2.SecurityMonitoringApiGetSecurityMonitoringSuppressionRequest =
  {
    suppressionId: SUPPRESSION_DATA_ID,
  };

apiInstance
  .getSecurityMonitoringSuppression(params)
  .then((data: v2.SecurityMonitoringSuppressionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
