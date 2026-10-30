/**
 * Evaluate an AI Guard request with a numeric confidence threshold
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.evaluateAIGuardRequest"] = true;
const apiInstance = new v2.AIGuardApi(configuration);

const params: v2.AIGuardApiEvaluateAIGuardRequestRequest = {
  body: {
    data: {
      type: "evaluations",
      attributes: {
        messages: [
          {
            role: "user",
            content: "Hello world!",
          },
        ],
        meta: {
          confidenceThreshold: 0.8,
        },
      },
    },
  },
};

apiInstance
  .evaluateAIGuardRequest(params)
  .then((data: v2.AIGuardEvaluateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
