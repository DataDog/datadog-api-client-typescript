/**
 * Get critical assets affecting a specific rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "security_rule" in the system
const SECURITY_RULE_ID = process.env.SECURITY_RULE_ID as string;

const params: v2.SecurityMonitoringApiGetCriticalAssetsAffectingRuleRequest = {
  ruleId: SECURITY_RULE_ID,
};

apiInstance
  .getCriticalAssetsAffectingRule(params)
  .then((data: v2.SecurityMonitoringCriticalAssetsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
