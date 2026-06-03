/**
 * Add rum replay session to playlist returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RumReplayPlaylistsApi(configuration);

const params: v2.RumReplayPlaylistsApiAddRumReplaySessionToPlaylistRequest = {
  ts: 1704067200000,
  playlistId: 1234567,
  sessionId: "00000000-0000-0000-0000-000000000001",
};

apiInstance
  .addRumReplaySessionToPlaylist(params)
  .then((data: v2.PlaylistsSession) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
