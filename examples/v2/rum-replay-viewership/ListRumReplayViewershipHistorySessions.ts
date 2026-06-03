/**
 * List rum replay viewership history sessions returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RumReplayViewershipApi(configuration);

apiInstance
  .listRumReplayViewershipHistorySessions()
  .then((data: v2.ViewershipHistorySessionArray) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
