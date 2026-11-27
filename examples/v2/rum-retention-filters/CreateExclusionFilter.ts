/**
 * Create a RUM exclusion filter returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.RumRetentionFiltersApi(configuration);

const params: v2.RumRetentionFiltersApiCreateExclusionFilterRequest = {
  body: {
    data: {
      type: "exclusion_filters",
      attributes: {
        name: "Example-Rum-Retention-Filter",
        enabled: true,
        eventType: "error",
        query: "@error.message:*extension*",
      },
    },
  },
  appId: "a33671aa-24fd-4dcd-ba4b-5bbdbafe7690",
};

apiInstance
  .createExclusionFilter(params)
  .then((data: v2.RumExclusionFilterResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
