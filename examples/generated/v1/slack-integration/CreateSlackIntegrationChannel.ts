import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SlackIntegrationApi(configuration);

let params:v1.SlackIntegrationApiCreateSlackIntegrationChannelRequest = {
  // string | Your Slack account name.
  accountName: "account_name_example",
  // SlackIntegrationChannel | Payload describing Slack channel to be created
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

apiInstance.createSlackIntegrationChannel(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
