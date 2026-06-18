/**
 * Create a mute rule returns "Successfully created the mute rule" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.createSecurityFindingsAutomationMuteRule"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateSecurityFindingsAutomationMuteRuleRequest =
  {
    body: {
      data: {
        attributes: {
          action: {
            reason: "risk_accepted",
          },
          enabled: true,
          name: "Example-Security-Monitoring",
          rule: {
            findingTypes: ["misconfiguration"],
            query: "env:staging",
          },
        },
        type: "mute_rules",
      },
    },
  };

apiInstance
  .createSecurityFindingsAutomationMuteRule(params)
  .then((data: v2.MuteRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
