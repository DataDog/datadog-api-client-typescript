/**
 * Delete rum replay playlist returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RumReplayPlaylistsApi(configuration);

const params: v2.RumReplayPlaylistsApiDeleteRumReplayPlaylistRequest = {
  playlistId: 1234567,
};

apiInstance
  .deleteRumReplayPlaylist(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
