/**
 * Bulk convert rules to Terraform returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiBulkConvertExistingSecurityMonitoringRulesRequest =
  {
    body: {
      data: {
        attributes: {
          ruleIds: ["def-000-u7q", "def-000-7dd"],
        },
        id: "convert_bulk",
        type: "security_monitoring_rules_convert_bulk",
      },
    },
  };

apiInstance
  .bulkConvertExistingSecurityMonitoringRules(params)
  .then((data: client.HttpFile) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
