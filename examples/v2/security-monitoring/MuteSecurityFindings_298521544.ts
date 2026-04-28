/**
 * Unmute security findings returns "Accepted" response
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
          description: "Resolved.",
          isMuted: false,
          reason: "NO_PENDING_FIX",
        },
      },
      relationships: {
        findings: {
          data: [
            {
              id: "ZGVmLTAwMC0wYmd-MDE4NjcyMDJkMzE4MDE5ODY5MGE4ZmQ2MmFlMjg0Y2M=",
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
