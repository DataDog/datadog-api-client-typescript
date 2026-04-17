/**
 * Export security monitoring resources to Terraform returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.bulkExportSecurityMonitoringTerraformResources"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "suppression" in the system
const SUPPRESSION_DATA_ID = process.env.SUPPRESSION_DATA_ID as string;

const params: v2.SecurityMonitoringApiBulkExportSecurityMonitoringTerraformResourcesRequest =
  {
    body: {
      data: {
        attributes: {
          resourceIds: [SUPPRESSION_DATA_ID],
        },
        type: "bulk_export_resources",
      },
    },
    resourceType: "suppressions",
  };

apiInstance
  .bulkExportSecurityMonitoringTerraformResources(params)
  .then((data: client.HttpFile) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
