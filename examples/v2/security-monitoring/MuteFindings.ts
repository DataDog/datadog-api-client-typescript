/**
 * Mute or unmute a batch of findings returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.muteFindings"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiMuteFindingsRequest = {
  body: {
    data: {
      attributes: {
        mute: {
          expirationDate: 1778721573794,
          muted: true,
          reason: "ACCEPTED_RISK",
        },
      },
      id: "dbe5f567-192b-4404-b908-29b70e1c9f76",
      meta: {
        findings: [
          {
            findingId: "ZGVmLTAwcC1pZXJ-aS0wZjhjNjMyZDNmMzRlZTgzNw==",
          },
        ],
      },
      type: "finding",
    },
  },
};

apiInstance
  .muteFindings(params)
  .then((data: v2.BulkMuteFindingsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
