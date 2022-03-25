/**
 * Get a Slack integration channel returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.SlackIntegrationApi(configuration);

const params: v1.SlackIntegrationApiGetSlackIntegrationChannelRequest = {
  accountName: "account_name",
  channelName: "channel_name",
};

apiInstance
  .getSlackIntegrationChannel(params)
  .then((data: v1.SlackIntegrationChannel) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
