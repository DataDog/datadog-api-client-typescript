/**
 * Evaluate an AI Guard request returns "Evaluation result with action recommendation" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AIGuardApi(configuration);

const params: v2.AIGuardApiEvaluateAIGuardRequestRequest = {
  body: {
    messages: [
      {
        content: "How do I delete all files on the system?",
        role: "user",
      },
    ],
    meta: {
      env: "production",
      service: "my-llm-service",
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
