/**
 * List AI custom rulesets returns "Successful response" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listAiCustomRulesets"] = true;
const apiInstance = new v2.StaticAnalysisApi(configuration);

apiInstance
  .listAiCustomRulesets()
  .then((data: v2.AiCustomRulesetsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
