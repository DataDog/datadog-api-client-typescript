/**
 * Create rum replay session watch returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RumReplayViewershipApi(configuration);

const params: v2.RumReplayViewershipApiCreateRumReplaySessionWatchRequest = {
  body: {
    data: {
      attributes: {
        applicationId: "aaaaaaaa-1111-2222-3333-bbbbbbbbbbbb",
        eventId: "11111111-2222-3333-4444-555555555555",
        timestamp: new Date(2026, 1, 13, 17, 15, 53, 208340),
      },
      type: "rum_replay_watch",
    },
  },
  sessionId: "00000000-0000-0000-0000-000000000001",
};

apiInstance
  .createRumReplaySessionWatch(params)
  .then((data: v2.Watch) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
