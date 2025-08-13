/**
 * Convert an existing rule from JSON to Terraform returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "security_rule_hash" in the system
const SECURITY_RULE_HASH_ID = process.env.SECURITY_RULE_HASH_ID as string;

const params: v2.SecurityMonitoringApiConvertExistingSecurityMonitoringRuleRequest =
  {
    ruleId: SECURITY_RULE_HASH_ID,
  };

apiInstance
  .convertExistingSecurityMonitoringRule(params)
  .then((data: v2.SecurityMonitoringRuleConvertResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
