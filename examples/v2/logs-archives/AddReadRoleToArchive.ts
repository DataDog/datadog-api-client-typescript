/**
 * Grant role to an archive returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.LogsArchivesApi(configuration);

const params: v2.LogsArchivesApiAddReadRoleToArchiveRequest = {
  body: {
    data: {
      id: "3653d3c6-0c75-11ea-ad28-fb5701eabc7d",
      type: "roles",
    },
  },
  archiveId: "archive_id",
};

apiInstance
  .addReadRoleToArchive(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
