/**
 * Rehydrate an Archive Search returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.rehydrateArchiveSearch"] = true;
const apiInstance = new v2.LogsArchiveSearchesApi(configuration);

const params: v2.LogsArchiveSearchesApiRehydrateArchiveSearchRequest = {
  body: {
    data: {
      attributes: {
        rehydration: {
          retentionDays: 15,
          tier: "standard",
        },
      },
      type: "archive_search",
    },
  },
  archiveSearchId: "archive_search_id",
};

apiInstance
  .rehydrateArchiveSearch(params)
  .then((data: v2.ArchiveSearchResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
