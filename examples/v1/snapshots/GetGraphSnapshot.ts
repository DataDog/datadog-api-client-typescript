/**
 * Take graph snapshots returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.SnapshotsApi(configuration);

const params: v1.SnapshotsApiGetGraphSnapshotRequest = {
  metricQuery: "avg:system.load.1{*}",
  start: new Date(new Date().getTime() / 1000 + -1 * 86400).getTime() / 1000,
  end: new Date().getTime() / 1000,
  title: "System load",
};

apiInstance
  .getGraphSnapshot(params)
  .then((data: v1.GraphSnapshot) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
