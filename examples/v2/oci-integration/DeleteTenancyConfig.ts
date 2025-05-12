/**
 * Delete tenancy config returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OCIIntegrationApi(configuration);

// there is a valid "oci_tenancy" resource in the system
const OCI_TENANCY_DATA_ID = process.env.OCI_TENANCY_DATA_ID as string;

const params: v2.OCIIntegrationApiDeleteTenancyConfigRequest = {
  tenancyOcid: OCI_TENANCY_DATA_ID,
};

apiInstance
  .deleteTenancyConfig(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
