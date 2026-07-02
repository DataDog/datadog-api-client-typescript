/**
 * Create a graph snapshot returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createSnapshot"] = true;
const apiInstance = new v2.ReportingAndSharingApi(configuration);

const params: v2.ReportingAndSharingApiCreateSnapshotRequest = {
  body: {
    data: {
      attributes: {
        additionalConfig: {
          templateVariables: [
            {
              name: "host",
              prefix: "host",
              values: ["web-server-1", "web-server-2"],
            },
          ],
          timeseriesLegendType: "expanded",
          timezoneOffsetMinutes: 300,
        },
        end: 1692464800000,
        height: 185,
        isAuthenticated: false,
        start: 1692464000000,
        ttl: "60d",
        widgetDefinition: {
          requests: "[{'q': 'avg:system.cpu.user{*}'}]",
          type: "timeseries",
        },
        width: 300,
      },
      type: "create_snapshot",
    },
  },
};

apiInstance
  .createSnapshot(params)
  .then((data: v2.CreateSnapshotResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
