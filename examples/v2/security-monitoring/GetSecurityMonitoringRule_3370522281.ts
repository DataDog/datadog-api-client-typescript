/**
 * Get a cloud configuration rule's details returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "cloud_configuration_rule" in the system
const CLOUD_CONFIGURATION_RULE_ID = process.env
  .CLOUD_CONFIGURATION_RULE_ID as string;

const params: v2.SecurityMonitoringApiGetSecurityMonitoringRuleRequest = {
  ruleId: CLOUD_CONFIGURATION_RULE_ID,
};

apiInstance
  .getSecurityMonitoringRule(params)
  .then((data: v2.SecurityMonitoringRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
