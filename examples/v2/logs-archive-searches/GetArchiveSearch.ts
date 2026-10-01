/**
 * Get an Archive Search returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.getArchiveSearch"] = true;
const apiInstance = new v2.LogsArchiveSearchesApi(configuration);

const params: v2.LogsArchiveSearchesApiGetArchiveSearchRequest = {
  archiveSearchId: "archive_search_id",
};

apiInstance
  .getArchiveSearch(params)
  .then((data: v2.ArchiveSearchResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
