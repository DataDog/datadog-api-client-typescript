/**
 * Delete an existing rule returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.CloudSIEMApi(configuration);

// there is a valid "security_rule" in the system
let SECURITY_RULE_ID = process.env.SECURITY_RULE_ID as string;

let params: v2.CloudSIEMApiDeleteSecurityMonitoringRuleRequest = {
  ruleId: SECURITY_RULE_ID,
};

apiInstance
  .deleteSecurityMonitoringRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
