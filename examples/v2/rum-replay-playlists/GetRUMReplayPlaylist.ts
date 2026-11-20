/**
 * Get RUM replay playlist returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.RUMReplayPlaylistsApi(configuration);

const params: v2.RUMReplayPlaylistsApiGetRUMReplayPlaylistRequest = {
  playlistId: 1234567,
};

apiInstance
  .getRUMReplayPlaylist(params)
  .then((data: v2.Playlist) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
