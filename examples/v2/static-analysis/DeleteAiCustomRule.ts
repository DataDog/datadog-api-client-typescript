/**
 * Delete an AI custom rule returns "Successfully deleted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.deleteAiCustomRule"] = true;
const apiInstance = new v2.StaticAnalysisApi(configuration);

const params: v2.StaticAnalysisApiDeleteAiCustomRuleRequest = {
  rulesetName: "my-ai-ruleset",
  ruleName: "my-ai-rule",
};

apiInstance
  .deleteAiCustomRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
