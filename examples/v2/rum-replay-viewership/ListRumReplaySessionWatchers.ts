/**
 * List rum replay session watchers returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RumReplayViewershipApi(configuration);

const params: v2.RumReplayViewershipApiListRumReplaySessionWatchersRequest = {
  sessionId: "00000000-0000-0000-0000-000000000001",
};

apiInstance
  .listRumReplaySessionWatchers(params)
  .then((data: v2.WatcherArray) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
