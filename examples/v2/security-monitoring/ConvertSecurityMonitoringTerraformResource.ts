/**
 * Convert security monitoring resource to Terraform returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.convertSecurityMonitoringTerraformResource"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiConvertSecurityMonitoringTerraformResourceRequest =
  {
    body: {
      data: {
        type: "convert_resource",
        id: "abc-123",
        attributes: {
          resourceJson: {
            enabled: "True",
            name: "Example-Security-Monitoring",
            rule_query: "source:cloudtrail",
            suppression_query: "env:test",
          },
        },
      },
    },
    resourceType: "suppressions",
  };

apiInstance
  .convertSecurityMonitoringTerraformResource(params)
  .then((data: v2.SecurityMonitoringTerraformExportResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
