/**
 * Get an archive returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsArchivesApi(configuration);

const params: v2.LogsArchivesApiGetLogsArchiveRequest = {
  archiveId: "archive_id",
};

apiInstance
  .getLogsArchive(params)
  .then((data: v2.LogsArchive) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
