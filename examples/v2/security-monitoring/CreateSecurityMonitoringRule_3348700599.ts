/**
 * Create a detection rule with detection method "third_party" returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

let params: v2.SecurityMonitoringApiCreateSecurityMonitoringRuleRequest = {
  body: {
    name: "Example-Create_a_detection_rule_with_detection_method_third_party_returns_OK_response",
    queries: [
      {
        query: "@test:true",
        aggregation: "none",
        groupByFields: [],
        distinctFields: [],
      },
    ],
    filters: [],
    cases: [
      {
        name: "",
        status: "info",
        notifications: [],
      },
    ],
    options: {
      detectionMethod: "third_party",
      evaluationWindow: 0,
      keepAlive: 3600,
      maxSignalDuration: 86400,
      thirdPartyRuleOptions: {
        rootQuery: "@pop",
        defaultStatus: "low",
      },
    },
    message:
      "Example-Create_a_detection_rule_with_detection_method_third_party_returns_OK_response message",
    tags: [],
    isEnabled: true,
  },
};

apiInstance
  .createSecurityMonitoringRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
