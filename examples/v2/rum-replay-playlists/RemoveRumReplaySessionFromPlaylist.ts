/**
 * Remove rum replay session from playlist returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RumReplayPlaylistsApi(configuration);

const params: v2.RumReplayPlaylistsApiRemoveRumReplaySessionFromPlaylistRequest =
  {
    playlistId: 1234567,
    sessionId: "00000000-0000-0000-0000-000000000001",
  };

apiInstance
  .removeRumReplaySessionFromPlaylist(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
