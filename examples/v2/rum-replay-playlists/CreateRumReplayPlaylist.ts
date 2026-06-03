/**
 * Create rum replay playlist returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RumReplayPlaylistsApi(configuration);

const params: v2.RumReplayPlaylistsApiCreateRumReplayPlaylistRequest = {
  body: {
    data: {
      attributes: {
        createdBy: {
          handle: "john.doe@example.com",
          id: "00000000-0000-0000-0000-000000000001",
          uuid: "00000000-0000-0000-0000-000000000001",
        },
        name: "My Playlist",
      },
      type: "rum_replay_playlist",
    },
  },
};

apiInstance
  .createRumReplayPlaylist(params)
  .then((data: v2.Playlist) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
