/**
 * Create an AI custom ruleset returns "Successfully created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createAiCustomRuleset"] = true;
const apiInstance = new v2.StaticAnalysisApi(configuration);

const params: v2.StaticAnalysisApiCreateAiCustomRulesetRequest = {
  body: {
    data: {
      attributes: {
        description: "Ruleset description",
        name: "my-ai-ruleset",
        shortDescription: "Ruleset short description",
      },
      id: "my-ai-ruleset",
      type: "ai_ruleset",
    },
  },
};

apiInstance
  .createAiCustomRuleset(params)
  .then((data: v2.AiCustomRulesetResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
