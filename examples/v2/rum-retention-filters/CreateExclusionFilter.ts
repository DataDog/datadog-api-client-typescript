/**
 * Create a RUM exclusion filter returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createExclusionFilter"] = true;
const apiInstance = new v2.RumRetentionFiltersApi(configuration);

const params: v2.RumRetentionFiltersApiCreateExclusionFilterRequest = {
  body: {
    data: {
      attributes: {
        enabled: true,
        eventType: "error",
        name: "Exclude noisy browser extension errors",
        query: "@error.message:*extension*",
      },
      type: "exclusion_filters",
    },
  },
  appId: "app_id",
};

apiInstance
  .createExclusionFilter(params)
  .then((data: v2.RumExclusionFilterResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
