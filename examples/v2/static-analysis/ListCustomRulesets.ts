/**
 * List Custom Rulesets returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listCustomRulesets"] = true;
const apiInstance = new v2.StaticAnalysisApi(configuration);

apiInstance
  .listCustomRulesets()
  .then((data: v2.CustomRulesetListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
