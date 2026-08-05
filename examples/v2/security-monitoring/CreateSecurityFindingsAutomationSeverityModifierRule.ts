/**
 * Create a severity modifier rule returns "Successfully created the severity modifier rule" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.createSecurityFindingsAutomationSeverityModifierRule"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateSecurityFindingsAutomationSeverityModifierRuleRequest =
  {
    body: {
      data: {
        attributes: {
          action: {
            description: "Lower severity for dev environment noise",
            severity: "low",
            type: "set",
          },
          enabled: true,
          name: "Downgrade misconfigurations in dev",
          rule: {
            findingTypes: ["misconfiguration"],
            query: "env:prod team:platform",
          },
        },
        type: "severity_modifier_rules",
      },
    },
  };

apiInstance
  .createSecurityFindingsAutomationSeverityModifierRule(params)
  .then((data: v2.SeverityModifierRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
