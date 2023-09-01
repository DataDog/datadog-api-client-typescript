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
    name: "Example-Security-Monitoring_cloud_updated",
    isEnabled: false,
    cases: [
      {
        status: "info",
        notifications: [],
      },
    ],
    options: {
      complianceRuleOptions: {
        resourceType: "gcp_compute_disk",
        regoRule: {
          policy: `package datadog

import data.datadog.output as dd_output

import future.keywords.contains
import future.keywords.if
import future.keywords.in

milliseconds_in_a_day := ((1000 * 60) * 60) * 24

eval(iam_service_account_key) = "skip" if {
	iam_service_account_key.disabled
} else = "pass" if {
	(iam_service_account_key.resource_seen_at / milliseconds_in_a_day) - (iam_service_account_key.valid_after_time / milliseconds_in_a_day) <= 90
} else = "fail"

# This part remains unchanged for all rules
results contains result if {
	some resource in input.resources[input.main_resource_type]
	result := dd_output.format(resource, eval(resource))
}
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
