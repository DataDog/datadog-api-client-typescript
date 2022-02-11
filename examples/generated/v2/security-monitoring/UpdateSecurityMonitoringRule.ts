import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

let params:v2.SecurityMonitoringApiUpdateSecurityMonitoringRuleRequest = {
  // string | The ID of the rule.
  ruleId: "rule_id_example",
  // SecurityMonitoringRuleUpdatePayload
  body: {
    cases: [
      {
        condition: "condition_example",
        name: "name_example",
        notifications: [
          "notifications_example",
        ],
        status: "critical",
      },
    ],
    filters: [
      {
        action: "require",
        query: "query_example",
      },
    ],
    hasExtendedTitle: true,
    isEnabled: true,
    message: "message_example",
    name: "name_example",
    options: {
      detectionMethod: "threshold",
      evaluationWindow: 0,
      keepAlive: 0,
      maxSignalDuration: 0,
      newValueOptions: {
        forgetAfter: 1,
        learningDuration: 0,
      },
    },
    queries: [
      {
        aggregation: "count",
        distinctFields: [
          "distinctFields_example",
        ],
        groupByFields: [
          "groupByFields_example",
        ],
        metric: "metric_example",
        name: "name_example",
        query: "query_example",
      },
    ],
    tags: [
      "tags_example",
    ],
    version: 1,
  },
};

apiInstance.updateSecurityMonitoringRule(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
