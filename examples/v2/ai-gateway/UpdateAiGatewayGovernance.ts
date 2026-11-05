/**
 * Replace AI Gateway governance controls returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.updateAiGatewayGovernance"] = true;
const apiInstance = new v2.AIGatewayApi(configuration);

const params: v2.AIGatewayApiUpdateAiGatewayGovernanceRequest = {
  body: {
    data: {
      attributes: {
        dataCaptureMode: "metadata_only",
        metadataCapture: ["tool_usage", "tool_output_size", "tool_names"],
        zdrMode: "off",
      },
      id: "organization",
      type: "governance",
    },
  },
};

apiInstance
  .updateAiGatewayGovernance(params)
  .then((data: v2.AiGatewayGovernanceResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
