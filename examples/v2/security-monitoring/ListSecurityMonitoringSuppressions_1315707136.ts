/**
 * Get all suppression rules returns "OK" response with sort ascending
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "suppression" in the system

// there is a valid "suppression2" in the system

const params: v2.SecurityMonitoringApiListSecurityMonitoringSuppressionsRequest =
  {
    query: "id:3dd-0uc-h1s OR id:886e6c3e-e543-049c-ee1b-56a1110295c0",
    sort: "name",
  };

apiInstance
  .listSecurityMonitoringSuppressions(params)
  .then((data: v2.SecurityMonitoringPaginatedSuppressionsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
