/**
 * Update an archive returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.LogsArchivesApi(configuration);

const params: v2.LogsArchivesApiUpdateLogsArchiveRequest = {
  body: {
    data: {
      attributes: {
        destination: {
          container: "container-name",
          integration: {
            clientId: "aaaaaaaa-1a1a-1a1a-1a1a-aaaaaaaaaaaa",
            tenantId: "aaaaaaaa-1a1a-1a1a-1a1a-aaaaaaaaaaaa",
          },
          storageAccount: "account-name",
          type: "azure",
        },
        includeTags: false,
        name: "Nginx Archive",
        query: "source:nginx",
        rehydrationMaxScanSizeInGb: 100,
        rehydrationTags: ["team:intake", "team:app"],
      },
      type: "archives",
    },
  },
  archiveId: "archive_id",
};

apiInstance
  .updateLogsArchive(params)
  .then((data: v2.LogsArchive) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
