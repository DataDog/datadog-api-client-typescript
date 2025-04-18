/**
 * Get a rule's version history returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiGetRuleVersionHistoryRequest = {
  ruleId: "rule_id",
};

apiInstance
  .getRuleVersionHistory(params)
  .then((data: v2.GetRuleVersionHistoryResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
