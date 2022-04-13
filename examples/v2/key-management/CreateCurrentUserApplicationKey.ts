/**
 * Create an application key for current user returns "Created" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.KeyManagementApi(configuration);

const params: v2.KeyManagementApiCreateCurrentUserApplicationKeyRequest = {
  body: {
    data: {
      attributes: {
        name: "Application Key for managing dashboards",
        scopes: [
          "dashboards_read",
          "dashboards_write",
          "dashboards_public_share",
        ],
      },
      type: "application_keys",
    },
  },
};

apiInstance
  .createCurrentUserApplicationKey(params)
  .then((data: v2.ApplicationKeyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
