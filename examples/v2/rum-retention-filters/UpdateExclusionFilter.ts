/**
 * Update a RUM exclusion filter returns "Updated" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateExclusionFilter"] = true;
const apiInstance = new v2.RumRetentionFiltersApi(configuration);

const params: v2.RumRetentionFiltersApiUpdateExclusionFilterRequest = {
  body: {
    data: {
      attributes: {
        enabled: true,
        eventType: "error",
        name: "Exclude noisy browser extension errors",
        query: "@error.message:*extension*",
      },
      id: "051601eb-54a0-abc0-03f9-cc02efa18892",
      type: "exclusion_filters",
    },
  },
  appId: "app_id",
  efId: "ef_id",
};

apiInstance
  .updateExclusionFilter(params)
  .then((data: v2.RumExclusionFilterResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
