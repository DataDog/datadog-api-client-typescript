/**
 * Update a Slack integration channel returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SlackIntegrationApi(configuration);

const params: v1.SlackIntegrationApiUpdateSlackIntegrationChannelRequest = {
  body: {
    display: {
      message: true,
      notified: true,
      snapshot: true,
      tags: true,
    },
    name: "#general",
  },
  accountName: "account_name",
  channelName: "channel_name",
};

apiInstance
  .updateSlackIntegrationChannel(params)
  .then((data: v1.SlackIntegrationChannel) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
