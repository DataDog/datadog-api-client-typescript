/**
 * Create a new inbox rule returns "Successfully created the inbox rule" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateInboxRuleRequest = {
  body: {
    data: {
      attributes: {
        action: {
          reasonDescription: "We want to focus on these items.",
        },
        enabled: true,
        name: "Rule 1",
        rule: {
          issueType: "vulnerability",
          query: "key:val",
          ruleIds: ["rule-id-1"],
          ruleTypes: ["application_code_vulnerability"],
          severities: ["critical"],
        },
      },
      type: "inbox_rules",
    },
  },
};

apiInstance
  .createInboxRule(params)
  .then((data: v2.InboxRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
