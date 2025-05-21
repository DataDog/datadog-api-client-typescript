/**
 * Update tenancy config returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OCIIntegrationApi(configuration);

// there is a valid "oci_tenancy" resource in the system
const OCI_TENANCY_DATA_ID = process.env.OCI_TENANCY_DATA_ID as string;

const params: v2.OCIIntegrationApiUpdateTenancyConfigRequest = {
  body: {
    data: {
      attributes: {
        homeRegion: "us-sanjose-1",
        metricsConfig: {
          compartmentTagFilters: ["datadog:true", "env:prod"],
          enabled: false,
          excludedServices: [],
        },
        resourceCollectionEnabled: false,
        userOcid: "ocid1.user.test_updated",
      },
      id: OCI_TENANCY_DATA_ID,
      type: "oci_tenancy",
    },
  },
  tenancyOcid: OCI_TENANCY_DATA_ID,
};

apiInstance
  .updateTenancyConfig(params)
  .then((data: v2.TenancyConfig) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
