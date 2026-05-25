/**
 * Get a SAST ruleset returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getStaticAnalysisRuleset"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiGetStaticAnalysisRulesetRequest = {
  rulesetName: "python-best-practices",
};

apiInstance
  .getStaticAnalysisRuleset(params)
  .then((data: v2.SastRulesetResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
