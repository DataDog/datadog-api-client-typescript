/**
 * Create a RUM retention filter returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.RUMRetentionFiltersApi(configuration);

const params: v2.RUMRetentionFiltersApiCreateRetentionFilterRequest = {
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
    },
  },
  appId: "a33671aa-24fd-4dcd-ba4b-5bbdbafe7690",
};

apiInstance
  .createRetentionFilter(params)
  .then((data: v2.RUMRetentionFilterResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
