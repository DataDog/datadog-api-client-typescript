/**
 * Create an inbox rule returns "Successfully created the inbox rule" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.createSecurityFindingsAutomationInboxRule"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateSecurityFindingsAutomationInboxRuleRequest =
  {
    body: {
      data: {
        attributes: {
          action: {
            description: "Needs triage",
          },
          enabled: true,
          name: "Example-Security-Monitoring",
          rule: {
            findingTypes: ["misconfiguration"],
            query: "env:staging",
          },
        },
        type: "inbox_rules",
      },
    },
  };

apiInstance
  .createSecurityFindingsAutomationInboxRule(params)
  .then((data: v2.InboxRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
