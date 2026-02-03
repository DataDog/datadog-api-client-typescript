/**
 * List replay heatmap snapshots returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RumReplayHeatmapsApi(configuration);

const params: v2.RumReplayHeatmapsApiListReplayHeatmapSnapshotsRequest = {
  filterViewName: "/home",
};

apiInstance
  .listReplayHeatmapSnapshots(params)
  .then((data: v2.SnapshotArray) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
