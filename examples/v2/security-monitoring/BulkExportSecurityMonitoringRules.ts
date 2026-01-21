/**
 * Bulk export security monitoring rules returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "security_rule" in the system
const SECURITY_RULE_ID = process.env.SECURITY_RULE_ID as string;

const params: v2.SecurityMonitoringApiBulkExportSecurityMonitoringRulesRequest =
  {
    body: {
      data: {
        attributes: {
          ruleIds: [SECURITY_RULE_ID],
        },
        type: "security_monitoring_rules_bulk_export",
      },
    },
  };

apiInstance
  .bulkExportSecurityMonitoringRules(params)
  .then((data: client.HttpFile) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
