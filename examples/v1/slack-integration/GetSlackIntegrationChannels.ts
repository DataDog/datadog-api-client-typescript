/**
 * Get all channels in a Slack integration returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SlackIntegrationApi(configuration);

const params: v1.SlackIntegrationApiGetSlackIntegrationChannelsRequest = {
  accountName: "account_name",
};

apiInstance
  .getSlackIntegrationChannels(params)
  .then((data: v1.SlackIntegrationChannel[]) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
