/**
 * Update an AI custom ruleset returns "Successfully updated" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateAiCustomRuleset"] = true;
const apiInstance = new v2.StaticAnalysisApi(configuration);

const params: v2.StaticAnalysisApiUpdateAiCustomRulesetRequest = {
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
  rulesetName: "my-ai-ruleset",
};

apiInstance
  .updateAiCustomRuleset(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
