/**
 * Create a custom variable returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.WebhooksIntegrationApi(configuration);

let params: v1.WebhooksIntegrationApiCreateWebhooksIntegrationCustomVariableRequest =
  {
    body: {
      isSecret: true,
      name: "EXAMPLECREATEACUSTOMVARIABLERETURNSOKRESPONSE",
      value: "CUSTOM_VARIABLE_VALUE",
    },
  };

apiInstance
  .createWebhooksIntegrationCustomVariable(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
