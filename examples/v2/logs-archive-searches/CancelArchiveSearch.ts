/**
 * Cancel an Archive Search returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.cancelArchiveSearch"] = true;
const apiInstance = new v2.LogsArchiveSearchesApi(configuration);

const params: v2.LogsArchiveSearchesApiCancelArchiveSearchRequest = {
  archiveSearchId: "archive_search_id",
};

apiInstance
  .cancelArchiveSearch(params)
  .then((data: v2.ArchiveSearchResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
