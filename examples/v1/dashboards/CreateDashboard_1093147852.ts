/**
 * Create a new dashboard with distribution widget with markers and num_buckets
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title: "Example-Dashboard",
    widgets: [
      {
        definition: {
          title: "",
          titleSize: "16",
          titleAlign: "left",
          type: "distribution",
          xaxis: {
            scale: "linear",
            min: "auto",
            max: "auto",
            includeZero: true,
            numBuckets: 55,
          },
          yaxis: {
            scale: "linear",
            min: "auto",
            max: "auto",
            includeZero: true,
          },
          markers: [
            {
              displayType: "percentile",
              value: "50",
            },
            {
              displayType: "percentile",
              value: "99",
            },
            {
              displayType: "percentile",
              value: "90",
            },
          ],
          requests: [
            {
              responseFormat: "scalar",
              queries: [
                {
                  dataSource: "metrics",
                  name: "query1",
                  query: "avg:system.cpu.user{*} by {service}",
                  aggregator: "avg",
                },
              ],
            },
          ],
        },
        layout: {
          x: 0,
          y: 0,
          width: 4,
          height: 4,
        },
      },
    ],
    layoutType: "ordered",
  },
};

apiInstance
  .createDashboard(params)
  .then((data: v1.Dashboard) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
