/**
 * Get a rule's details returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.SecurityPlatformApi(configuration);

const params: v2.SecurityPlatformApiGetSecurityMonitoringRuleRequest = {
  ruleId: "rule_id",
};

apiInstance
  .getSecurityMonitoringRule(params)
  .then((data: v2.SecurityMonitoringRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
