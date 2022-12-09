/**
 * Create a cloud configuration rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateSecurityMonitoringRuleRequest = {
  body: {
    name: "Example-Create_a_cloud_configuration_rule_returns_OK_response",
    cases: [
      {
        status: "info",
        notifications: [],
      },
    ],
    options: {
      complianceRuleOptions:
        "{'regoRule': {'policy': 'package datadog', 'resourceTypes': ['gcp_compute_disk']}}",
    },
    complianceSignalOptions: {
      userActivationStatus: false,
      userGroupByFields: [],
    },
    message: "Test rule",
    tags: [],
    isEnabled: true,
    type: "cloud_configuration",
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
