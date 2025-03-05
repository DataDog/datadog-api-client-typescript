/**
 * Create a RUM retention filter returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RumRetentionFiltersApi(configuration);

const params: v2.RumRetentionFiltersApiCreateRetentionFilterRequest = {
  body: {
    data: {
      type: "retention_filters",
      attributes: {
        name: "Test creating retention filter",
        eventType: "session",
        query: "custom_query",
        sampleRate: 50,
        enabled: true,
      },
      meta: {
        source: "terraform",
      },
    },
  },
  appId: "a33671aa-24fd-4dcd-ba4b-5bbdbafe7690",
};

apiInstance
  .createRetentionFilter(params)
  .then((data: v2.RumRetentionFilterResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
