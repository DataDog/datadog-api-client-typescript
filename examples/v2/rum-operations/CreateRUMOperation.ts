/**
 * Create a RUM operation returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.RUMOperationsApi(configuration);

const params: v2.RUMOperationsApiCreateRUMOperationRequest = {
  body: {
    data: {
      type: "operations",
      attributes: {
        name: "bdd_examplerumoperation",
        displayName: "BDD operation",
        tags: ["team:rum-backend"],
        journeyRum: {
          rumSteps: [
            {
              type: "start",
              nodes: [
                {
                  query: "@type:action @action.type:click",
                },
              ],
            },
            {
              type: "stop",
              nodes: [
                {
                  query: "@type:view",
                },
              ],
            },
          ],
        },
      },
    },
  },
};

apiInstance
  .createRUMOperation(params)
  .then((data: v2.RUMOperationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
