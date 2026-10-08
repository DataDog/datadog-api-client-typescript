/**
 * Send AI tool user activity returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AIImpactApi(configuration);

const params: v2.AIImpactApiCreateAIImpactUserActivityRequest = {
  body: {
    data: [
      {
        attributes: {
          day: "2026-05-26",
          isActive: true,
          models: ["claude-sonnet-4.5", "gpt-5"],
          tools: ["Claude Code", "Cursor"],
          userEmail: "user@example.com",
        },
        type: "ai_impact_user_activity",
      },
    ],
  },
};

apiInstance
  .createAIImpactUserActivity(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
