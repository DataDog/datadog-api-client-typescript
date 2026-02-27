/**
 * Get enrollment status returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getOnPremManagementServiceEnrollment"] =
  true;
const apiInstance = new v2.OnPremManagementServiceApi(configuration);

const params: v2.OnPremManagementServiceApiGetOnPremManagementServiceEnrollmentRequest =
  {
    tokenHash: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  };

apiInstance
  .getOnPremManagementServiceEnrollment(params)
  .then((data: v2.OnPremManagementServiceGetEnrollmentResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
