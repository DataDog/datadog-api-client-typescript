/**
 * Bulk delete security monitoring rules returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiBulkDeleteSecurityMonitoringRulesRequest =
  {
    body: {
      data: {
        attributes: {
          ruleIds: ["abc-000-u7q", "abc-000-7dd"],
        },
        type: "bulk_delete_rules",
      },
    },
  };

apiInstance
  .bulkDeleteSecurityMonitoringRules(params)
  .then((data: v2.SecurityMonitoringRuleBulkDeleteResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
