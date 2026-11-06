/**
 * Create a recovery request returns "Accepted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RUMRecoveryApi(configuration);

const params: v2.RUMRecoveryApiCreateRUMRecoveryRequestRequest = {
  body: {
    data: {
      attributes: {
        requestType: "sessions",
        sessions: [
          {
            applicationId: "a33671aa-24fd-4dcd-ba4b-5bbdbafe7690",
            sessionId: "00000000-0000-4000-8000-000000000001",
          },
        ],
      },
      type: "rum_recovery_request",
    },
  },
};

apiInstance
  .createRUMRecoveryRequest(params)
  .then((data: v2.RumRecoveryCreateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
