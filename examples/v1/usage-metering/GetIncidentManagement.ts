/**
 * Get hourly usage for incident management returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.UsageMeteringApi(configuration);

const params: v1.UsageMeteringApiGetIncidentManagementRequest = {
  startHr: new Date(new Date().getTime() + -5 * 86400 * 1000),
  endHr: new Date(new Date().getTime() + -3 * 86400 * 1000),
};

apiInstance
  .getIncidentManagement(params)
  .then((data: v1.UsageIncidentManagementResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
