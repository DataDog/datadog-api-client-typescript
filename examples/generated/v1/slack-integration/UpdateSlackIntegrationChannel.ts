import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.SlackIntegrationApi(configuration);

let params: v1.SlackIntegrationApiUpdateSlackIntegrationChannelRequest = {
  // string | Your Slack account name.
  accountName: "account_name_example",
  // string | The name of the Slack channel being operated on.
  channelName: "channel_name_example",
  // SlackIntegrationChannel | Payload describing fields and values to be updated.
  body: {
    display: {
      message: true,
      notified: true,
      snapshot: true,
      tags: true,
    },
    name: "#general",
  },
};

apiInstance
  .updateSlackIntegrationChannel(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
