/**
 * Validate a suppression rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiValidateSecurityMonitoringSuppressionRequest =
  {
    body: {
      data: {
        attributes: {
          dataExclusionQuery: "source:cloudtrail account_id:12345",
          description:
            "This rule suppresses low-severity signals in staging environments.",
          enabled: true,
          name: "Custom suppression",
          ruleQuery: "type:log_detection source:cloudtrail",
        },
        type: "suppressions",
      },
    },
  };

apiInstance
  .validateSecurityMonitoringSuppression(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
