/**
 * Remove a Slack integration channel returns "The channel was removed successfully." response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.SlackIntegrationApi(configuration);

const params: v1.SlackIntegrationApiRemoveSlackIntegrationChannelRequest = {
  accountName: "account_name",
  channelName: "channel_name",
};

apiInstance
  .removeSlackIntegrationChannel(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
