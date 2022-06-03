/**
 * Delete an existing rule returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.SecurityPlatformApi(configuration);

const params: v2.SecurityPlatformApiDeleteSecurityMonitoringRuleRequest = {
  ruleId: "rule_id",
};

apiInstance
  .deleteSecurityMonitoringRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
