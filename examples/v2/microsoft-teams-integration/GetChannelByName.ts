/**
 * Get channel information by name returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.MicrosoftTeamsIntegrationApi(configuration);

const params: v2.MicrosoftTeamsIntegrationApiGetChannelByNameRequest = {
  tenantName: "tenant_name",
  teamName: "team_name",
  channelName: "channel_name",
};

apiInstance
  .getChannelByName(params)
  .then((data: v2.MicrosoftTeamsGetChannelByNameResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
