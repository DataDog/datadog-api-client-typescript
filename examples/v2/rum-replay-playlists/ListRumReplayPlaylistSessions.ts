/**
 * List rum replay playlist sessions returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RumReplayPlaylistsApi(configuration);

const params: v2.RumReplayPlaylistsApiListRumReplayPlaylistSessionsRequest = {
  playlistId: 1234567,
};

apiInstance
  .listRumReplayPlaylistSessions(params)
  .then((data: v2.PlaylistsSessionArray) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
