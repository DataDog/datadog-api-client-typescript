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
