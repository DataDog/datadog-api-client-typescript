/**
 * Re-order retention filters returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.APMRetentionFiltersApi(configuration);

const params: v2.APMRetentionFiltersApiReorderApmRetentionFiltersRequest = {
  body: {
    data: [
      {
        id: "jdZrilSJQLqzb6Cu7aub9Q",
        type: "apm_retention_filter",
      },
      {
        id: "7RBOb7dLSYWI01yc3pIH8w",
        type: "apm_retention_filter",
      },
    ],
  },
};

apiInstance
  .reorderApmRetentionFilters(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
