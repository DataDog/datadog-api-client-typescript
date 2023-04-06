/**
 * Add Fastly account returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.FastlyIntegrationApi(configuration);

const params: v2.FastlyIntegrationApiCreateFastlyAccountRequest = {
  body: {
    data: {
      attributes: {
        apiKey: "ExampleFastlyIntegration",
        name: "Example-Fastly-Integration",
        services: [],
      },
      type: "fastly-accounts",
    },
  },
};

apiInstance
  .createFastlyAccount(params)
  .then((data: v2.FastlyAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
