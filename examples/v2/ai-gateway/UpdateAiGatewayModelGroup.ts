/**
 * Update an AI Gateway model group returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.updateAiGatewayModelGroup"] = true;
const apiInstance = new v2.AIGatewayApi(configuration);

const params: v2.AIGatewayApiUpdateAiGatewayModelGroupRequest = {
  body: {
    data: {
      attributes: {
        allowFastMode: true,
        maxReasoningLevel: "high",
        modelIds: [101],
        name: "Coding models",
        providerIds: [],
        routingRuleSlugs: ["coding-route"],
      },
      id: "7",
      type: "model-groups",
    },
  },
  id: "id",
};

apiInstance
  .updateAiGatewayModelGroup(params)
  .then((data: v2.AiGatewayModelGroupResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
