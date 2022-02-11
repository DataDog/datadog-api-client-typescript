import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.WebhooksIntegrationApi(configuration);

let params:v1.WebhooksIntegrationApiCreateWebhooksIntegrationCustomVariableRequest = {
  // WebhooksIntegrationCustomVariable | Define a custom variable request body.
  body: {
    isSecret: true,
    name: "CUSTOM_VARIABLE_NAME",
    value: "CUSTOM_VARIABLE_VALUE",
  },
};

apiInstance.createWebhooksIntegrationCustomVariable(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
