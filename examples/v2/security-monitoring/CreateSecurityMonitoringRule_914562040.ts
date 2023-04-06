/**
 * Create a detection rule with type 'signal_correlation' returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "security_rule" in the system
const SECURITY_RULE_ID = process.env.SECURITY_RULE_ID as string;

// there is a valid "security_rule_bis" in the system
const SECURITY_RULE_BIS_ID = process.env.SECURITY_RULE_BIS_ID as string;

const params: v2.SecurityMonitoringApiCreateSecurityMonitoringRuleRequest = {
  body: {
    name: "Example-Security-Monitoring_signal_rule",
    queries: [
      {
        ruleId: SECURITY_RULE_ID,
        aggregation: "event_count",
        correlatedByFields: ["host"],
        correlatedQueryIndex: 1,
      },
      {
        ruleId: SECURITY_RULE_BIS_ID,
        aggregation: "event_count",
        correlatedByFields: ["host"],
      },
    ],
    filters: [],
    cases: [
      {
        name: "",
        status: "info",
        condition: "a > 0 && b > 0",
        notifications: [],
      },
    ],
    options: {
      evaluationWindow: 900,
      keepAlive: 3600,
      maxSignalDuration: 86400,
    },
    message: "Test signal correlation rule",
    tags: [],
    isEnabled: true,
    type: "signal_correlation",
  },
};

apiInstance
  .createSecurityMonitoringRule(params)
  .then((data: v2.SecurityMonitoringRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
