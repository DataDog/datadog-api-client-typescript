/**
 * Delete tenancy config for non-existing tenancy returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OCIIntegrationApi(configuration);

const params: v2.OCIIntegrationApiDeleteTenancyConfigRequest = {
  tenancyOcid: "ocid1.tenancy.fake",
};

apiInstance
  .deleteTenancyConfig(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
