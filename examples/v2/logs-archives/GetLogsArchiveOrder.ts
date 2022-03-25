/**
 * Get archive order returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsArchivesApi(configuration);

apiInstance
  .getLogsArchiveOrder()
  .then((data: v2.LogsArchiveOrder) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
