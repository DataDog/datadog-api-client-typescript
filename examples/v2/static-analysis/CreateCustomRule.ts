/**
 * Create Custom Rule returns "Successfully created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createCustomRule"] = true;
const apiInstance = new v2.StaticAnalysisApi(configuration);

const params: v2.StaticAnalysisApiCreateCustomRuleRequest = {
  body: {
    data: {
      attributes: {},
      type: "custom_rule",
    },
  },
  rulesetName: "ruleset_name",
};

apiInstance
  .createCustomRule(params)
  .then((data: v2.CustomRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
