/**
 * Create or update IDP configuration returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.upsertIDPConfigValue"] = true;
const apiInstance = new v2.SoftwareCatalogApi(configuration);

const params: v2.SoftwareCatalogApiUpsertIDPConfigValueRequest = {
  body: {
    data: {
      attributes: {
        value: [
          {
            displayName: "My Dashboard",
            id: "dashboard-1",
          },
        ],
      },
      type: "idp_config",
    },
  },
  configName: "idp_pinned_dashboards",
};

apiInstance
  .upsertIDPConfigValue(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
