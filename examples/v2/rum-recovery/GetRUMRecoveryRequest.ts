/**
 * Get recovery request progress returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RUMRecoveryApi(configuration);

const params: v2.RUMRecoveryApiGetRUMRecoveryRequestRequest = {
  requestId: "11111111-1111-4111-8111-111111111111",
};

apiInstance
  .getRUMRecoveryRequest(params)
  .then((data: v2.RumRecoveryRequestResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
