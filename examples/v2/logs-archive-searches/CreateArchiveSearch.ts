/**
 * Create an Archive Search returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.createArchiveSearch"] = true;
const apiInstance = new v2.LogsArchiveSearchesApi(configuration);

const params: v2.LogsArchiveSearchesApiCreateArchiveSearchRequest = {
  body: {
    data: {
      attributes: {
        archiveId: "mhmyYmyLTOaFYKvhNadu1w",
        description: "Investigating the checkout latency spike.",
        from: new Date(2026, 1, 1, 0, 0, 0, 0),
        name: "checkout-latency-investigation",
        query: "service:checkout status:error",
        rehydration: {
          maxRehydratedEvents: 1000000,
          retentionDays: 15,
          tier: "standard",
        },
        to: new Date(2026, 1, 2, 0, 0, 0, 0),
      },
      type: "archive_search",
    },
  },
};

apiInstance
  .createArchiveSearch(params)
  .then((data: v2.ArchiveSearchResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
