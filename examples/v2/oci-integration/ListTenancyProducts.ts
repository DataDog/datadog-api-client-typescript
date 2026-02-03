/**
 * List tenancy products returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OCIIntegrationApi(configuration);

const params: v2.OCIIntegrationApiListTenancyProductsRequest = {
  productKeys: "productKeys",
};

apiInstance
  .listTenancyProducts(params)
  .then((data: v2.TenancyProductsList) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
