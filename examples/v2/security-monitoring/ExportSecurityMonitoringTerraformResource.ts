/**
 * Export security monitoring resource to Terraform returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.exportSecurityMonitoringTerraformResource"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "suppression" in the system
const SUPPRESSION_DATA_ID = process.env.SUPPRESSION_DATA_ID as string;

const params: v2.SecurityMonitoringApiExportSecurityMonitoringTerraformResourceRequest =
  {
    resourceType: "suppressions",
    resourceId: SUPPRESSION_DATA_ID,
  };

apiInstance
  .exportSecurityMonitoringTerraformResource(params)
  .then((data: v2.SecurityMonitoringTerraformExportResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
