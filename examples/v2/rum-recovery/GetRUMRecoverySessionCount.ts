/**
 * Estimate recoverable sessions returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RUMRecoveryApi(configuration);

const params: v2.RUMRecoveryApiGetRUMRecoverySessionCountRequest = {
  body: {
    data: {
      attributes: {
        from: 1789905600000,
        query: "service:web",
        to: 1789992000000,
      },
      id: "11111111-1111-4111-8111-111111111111",
      type: "rum_recovery_count",
    },
  },
};

apiInstance
  .getRUMRecoverySessionCount(params)
  .then((data: v2.RumRecoveryCountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
