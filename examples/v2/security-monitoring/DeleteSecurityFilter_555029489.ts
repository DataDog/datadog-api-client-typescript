/**
 * Delete a security filter returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "security_filter" in the system
const SECURITY_FILTER_DATA_ID = process.env.SECURITY_FILTER_DATA_ID as string;

const params: v2.SecurityMonitoringApiDeleteSecurityFilterRequest = {
  securityFilterId: SECURITY_FILTER_DATA_ID,
};

apiInstance
  .deleteSecurityFilter(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
