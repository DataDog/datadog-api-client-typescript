/**
 * List SKUs returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listProductCatalogSKUs"] = true;
const apiInstance = new v2.ProductCatalogApi(configuration);

const params: v2.ProductCatalogApiListProductCatalogSKUsRequest = {
  version: "v1",
};

apiInstance
  .listProductCatalogSKUs(params)
  .then((data: v2.ProductCatalogSKUsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
