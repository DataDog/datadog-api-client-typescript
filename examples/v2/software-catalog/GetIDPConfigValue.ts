/**
 * Get Internal Developer Portal configuration returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getIDPConfigValue"] = true;
const apiInstance = new v2.SoftwareCatalogApi(configuration);

const params: v2.SoftwareCatalogApiGetIDPConfigValueRequest = {
  configName: "idp_pinned_dashboards",
};

apiInstance
  .getIDPConfigValue(params)
  .then((data: v2.IDPConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
