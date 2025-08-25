/**
 * Create api handle returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.MicrosoftTeamsIntegrationApi(configuration);

const params: v2.MicrosoftTeamsIntegrationApiCreateTenantBasedHandleRequest = {
  body: {
    data: {
      attributes: {
        channelId:
          "19:iD_D2xy_sAa-JV851JJYwIa6mlW9F9Nxm3SLyZq68qY1@thread.tacv2",
        name: "Example-Microsoft-Teams-Integration",
        teamId: "e5f50a58-c929-4fb3-8866-e2cd836de3c2",
        tenantId: "4d3bac44-0230-4732-9e70-cc00736f0a97",
      },
      type: "tenant-based-handle",
    },
  },
};

apiInstance
  .createTenantBasedHandle(params)
  .then((data: v2.MicrosoftTeamsTenantBasedHandleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
