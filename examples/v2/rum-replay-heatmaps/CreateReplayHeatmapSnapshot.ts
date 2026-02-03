/**
 * Create replay heatmap snapshot returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RumReplayHeatmapsApi(configuration);

const params: v2.RumReplayHeatmapsApiCreateReplayHeatmapSnapshotRequest = {
  body: {
    data: {
      attributes: {
        applicationId: "aaaaaaaa-1111-2222-3333-bbbbbbbbbbbb",
        deviceType: "desktop",
        eventId: "11111111-2222-3333-4444-555555555555",
        isDeviceTypeSelectedByUser: false,
        snapshotName: "My Snapshot",
        start: 0,
        viewName: "/home",
      },
      type: "snapshots",
    },
  },
};

apiInstance
  .createReplayHeatmapSnapshot(params)
  .then((data: v2.Snapshot) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
