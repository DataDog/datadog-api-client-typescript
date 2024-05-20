/**
 * Create a suppression rule with an exclusion query returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateSecurityMonitoringSuppressionRequest =
  {
    body: {
      data: {
        attributes: {
          description:
            "This rule suppresses low-severity signals in staging environments.",
          enabled: true,
          expirationDate: 1638443471000,
          name: "Example-Security-Monitoring",
          ruleQuery: "type:log_detection source:cloudtrail",
          dataExclusionQuery: "account_id:12345",
        },
        type: "suppressions",
      },
    },
  };

apiInstance
  .createSecurityMonitoringSuppression(params)
  .then((data: v2.SecurityMonitoringSuppressionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
