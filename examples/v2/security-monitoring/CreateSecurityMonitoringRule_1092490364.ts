/**
 * Create a cloud_configuration rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateSecurityMonitoringRuleRequest = {
  body: {
    type: "cloud_configuration",
    name: "Example-Security-Monitoring_cloud",
    isEnabled: false,
    cases: [
      {
        status: "info",
        notifications: ["channel"],
      },
    ],
    options: {
      complianceRuleOptions: {
        resourceType: "gcp_compute_disk",
        complexRule: false,
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
    tags: ["my:tag"],
    complianceSignalOptions: {
      userActivationStatus: true,
      userGroupByFields: ["@account_id"],
    },
    filters: [
      {
        action: "require",
        query: "resource_id:helo*",
      },
      {
        action: "suppress",
        query: "control:helo*",
      },
    ],
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
