/**
 * Update a RUM retention filter returns "Updated" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RumRetentionFiltersApi(configuration);

const params: v2.RumRetentionFiltersApiUpdateRetentionFilterRequest = {
  body: {
    data: {
      id: "4b95d361-f65d-4515-9824-c9aaeba5ac2a",
      type: "retention_filters",
      attributes: {
        name: "Test updating retention filter",
        eventType: "view",
        query: "view_query",
        sampleRate: 100,
        enabled: true,
      },
    },
  },
  appId: "a33671aa-24fd-4dcd-ba4b-5bbdbafe7690",
  rfId: "4b95d361-f65d-4515-9824-c9aaeba5ac2a",
};

apiInstance
  .updateRetentionFilter(params)
  .then((data: v2.RumRetentionFilterResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
