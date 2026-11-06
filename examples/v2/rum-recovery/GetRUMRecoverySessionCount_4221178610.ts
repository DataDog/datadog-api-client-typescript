/**
 * Count recoverable sessions accepts exactly 180 days
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RUMRecoveryApi(configuration);

const params: v2.RUMRecoveryApiGetRUMRecoverySessionCountRequest = {
  body: {
    data: {
      type: "rum_recovery_count",
      attributes: {
        query: "service:rum18600-fixture",
        from: 1621077071000,
        to: 1636629071000,
      },
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
