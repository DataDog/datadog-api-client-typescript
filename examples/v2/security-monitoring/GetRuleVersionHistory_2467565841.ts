/**
 * Get rule version history returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getRuleVersionHistory"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "security_rule" in the system
const SECURITY_RULE_ID = process.env.SECURITY_RULE_ID as string;

const params: v2.SecurityMonitoringApiGetRuleVersionHistoryRequest = {
  ruleId: SECURITY_RULE_ID,
};

apiInstance
  .getRuleVersionHistory(params)
  .then((data: v2.GetRuleVersionHistoryResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
