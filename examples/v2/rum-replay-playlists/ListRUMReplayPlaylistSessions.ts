/**
 * List RUM replay playlist sessions returns "OK" response
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

const params: v2.RUMReplayPlaylistsApiListRUMReplayPlaylistSessionsRequest = {
  playlistId: 1234567,
};

apiInstance
  .listRUMReplayPlaylistSessions(params)
  .then((data: v2.PlaylistsSessionArray) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
