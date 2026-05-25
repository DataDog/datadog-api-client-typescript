/**
 * Get default rulesets for a language returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getStaticAnalysisDefaultRulesets"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiGetStaticAnalysisDefaultRulesetsRequest =
  {
    language: "python",
  };

apiInstance
  .getStaticAnalysisDefaultRulesets(params)
  .then((data: v2.DefaultRulesetsPerLanguageResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
