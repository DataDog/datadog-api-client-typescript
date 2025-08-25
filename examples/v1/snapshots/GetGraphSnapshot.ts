/**
 * Take graph snapshots returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SnapshotsApi(configuration);

const params: v1.SnapshotsApiGetGraphSnapshotRequest = {
  metricQuery: "avg:system.load.1{*}",
  start: Math.round(
    new Date(new Date().getTime() + -1 * 86400 * 1000).getTime() / 1000
  ),
  end: Math.round(new Date().getTime() / 1000),
  title: "System load",
  height: 400,
  width: 600,
};

apiInstance
  .getGraphSnapshot(params)
  .then((data: v1.GraphSnapshot) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
