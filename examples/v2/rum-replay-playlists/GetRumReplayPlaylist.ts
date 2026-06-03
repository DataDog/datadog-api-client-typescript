/**
 * Get rum replay playlist returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RumReplayPlaylistsApi(configuration);

const params: v2.RumReplayPlaylistsApiGetRumReplayPlaylistRequest = {
  playlistId: 1234567,
};

apiInstance
  .getRumReplayPlaylist(params)
  .then((data: v2.Playlist) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
