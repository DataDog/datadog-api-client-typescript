/**
 * Test a rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiTestSecurityMonitoringRuleRequest = {
  body: {
    rule: {
      cases: [
        {
          name: "",
          status: "info",
          notifications: [],
          condition: "a > 0",
        },
      ],
      hasExtendedTitle: true,
      isEnabled: true,
      message: "My security monitoring rule message.",
      name: "My security monitoring rule.",
      options: {
        decreaseCriticalityBasedOnEnv: false,
        detectionMethod: "threshold",
        evaluationWindow: 0,
        keepAlive: 0,
        maxSignalDuration: 0,
      },
      queries: [
        {
          query: "source:source_here",
          groupByFields: ["@userIdentity.assumed_role"],
          distinctFields: [],
          aggregation: "count",
          name: "",
        },
      ],
      tags: ["env:prod", "team:security"],
      type: "log_detection",
    },
    ruleQueryPayloads: [
      {
        expectedResult: true,
        index: 0,
        payload: {
          ddsource: "source_here",
          ddtags: "env:staging,version:5.1",
          hostname: "i-012345678",
          message:
            "2019-11-19T14:37:58,995 INFO [process.name][20081] Hello World",
          service: "payment",
        },
      },
    ],
  },
};

apiInstance
  .testSecurityMonitoringRule(params)
  .then((data: v2.SecurityMonitoringRuleTestResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
