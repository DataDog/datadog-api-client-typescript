/**
 * Update a cloud configuration rule's details returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "cloud_configuration_rule" in the system
const CLOUD_CONFIGURATION_RULE_ID = process.env
  .CLOUD_CONFIGURATION_RULE_ID as string;

const params: v2.SecurityMonitoringApiUpdateSecurityMonitoringRuleRequest = {
  body: {
    name: "Example-Update_a_cloud_configuration_rule_s_details_returns_OK_response_cloud_updated",
    isEnabled: false,
    cases: [
      {
        status: "info",
        notifications: [],
      },
    ],
    options: {
      complianceRuleOptions: {
        regoRule: {
          policy: `package datadog
`,
          resourceTypes: ["gcp_compute_disk"],
        },
      },
    },
    message: "ddd",
    tags: [],
    complianceSignalOptions: {
      userActivationStatus: false,
      userGroupByFields: [],
    },
  },
  ruleId: CLOUD_CONFIGURATION_RULE_ID,
};

apiInstance
  .updateSecurityMonitoringRule(params)
  .then((data: v2.SecurityMonitoringRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
