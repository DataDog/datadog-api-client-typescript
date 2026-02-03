/**
 * Update replay heatmap snapshot returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RumReplayHeatmapsApi(configuration);

const params: v2.RumReplayHeatmapsApiUpdateReplayHeatmapSnapshotRequest = {
  body: {
    data: {
      attributes: {
        eventId: "11111111-2222-3333-4444-555555555555",
        isDeviceTypeSelectedByUser: false,
        start: 0,
      },
      id: "00000000-0000-0000-0000-000000000001",
      type: "snapshots",
    },
  },
  snapshotId: "00000000-0000-0000-0000-000000000001",
};

apiInstance
  .updateReplayHeatmapSnapshot(params)
  .then((data: v2.Snapshot) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
