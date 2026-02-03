/**
 * Delete replay heatmap snapshot returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RumReplayHeatmapsApi(configuration);

const params: v2.RumReplayHeatmapsApiDeleteReplayHeatmapSnapshotRequest = {
  snapshotId: "00000000-0000-0000-0000-000000000001",
};

apiInstance
  .deleteReplayHeatmapSnapshot(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
