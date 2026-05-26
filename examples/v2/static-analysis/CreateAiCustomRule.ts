/**
 * Create an AI custom rule returns "Successfully created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createAiCustomRule"] = true;
const apiInstance = new v2.StaticAnalysisApi(configuration);

const params: v2.StaticAnalysisApiCreateAiCustomRuleRequest = {
  body: {
    data: {
      attributes: {
        name: "my-ai-rule",
      },
      id: "my-ai-rule",
      type: "ai_rule",
    },
  },
  rulesetName: "my-ai-ruleset",
};

apiInstance
  .createAiCustomRule(params)
  .then((data: v2.AiCustomRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
