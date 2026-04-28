/**
 * Mute or unmute security findings returns "Accepted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.muteSecurityFindings"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiMuteSecurityFindingsRequest = {
  body: {
    data: {
      attributes: {
        mute: {
          description: "To be resolved later.",
          expireAt: 1778721573794,
          isMuted: true,
          reason: "PENDING_FIX",
        },
      },
      id: "93bfeb70-af47-424d-908a-948d3f08e37f",
      relationships: {
        findings: {
          data: [
            {
              id: "ZGVmLTAwcC1pZXJ-aS0wZjhjNjMyZDNmMzRlZTgzNw==",
              type: "findings",
            },
          ],
        },
      },
      type: "mute",
    },
  },
};

apiInstance
  .muteSecurityFindings(params)
  .then((data: v2.MuteFindingsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
