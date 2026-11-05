/**
 * Create an AI Gateway model group returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.createAiGatewayModelGroup"] = true;
const apiInstance = new v2.AIGatewayApi(configuration);

const params: v2.AIGatewayApiCreateAiGatewayModelGroupRequest = {
  body: {
    data: {
      attributes: {
        allowFastMode: true,
        bindings: [
          {
            principals: ["user:55555555-5555-5555-5555-555555555555"],
            relation: "runner",
          },
        ],
        maxReasoningLevel: "high",
        modelIds: [101],
        name: "Coding models",
        providerIds: [],
        routingRuleSlugs: ["coding-route"],
      },
      type: "model-groups",
    },
  },
};

apiInstance
  .createAiGatewayModelGroup(params)
  .then((data: v2.AiGatewayModelGroupResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
