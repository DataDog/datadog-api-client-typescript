/**
 * Create a distribution widget using a histogram request containing a formulas and functions metrics query
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title:
      "Example-Create_a_distribution_widget_using_a_histogram_request_containing_a_formulas_and_functions_metrics_q",
    widgets: [
      {
        definition: {
          title: "Metrics HOP",
          titleSize: "16",
          titleAlign: "left",
          showLegend: false,
          type: "distribution",
          xaxis: {
            max: "auto",
            includeZero: true,
            scale: "linear",
            min: "auto",
          },
          yaxis: {
            max: "auto",
            includeZero: true,
            scale: "linear",
            min: "auto",
          },
          requests: [
            {
              query: {
                query: "histogram:trace.Load{*}",
                dataSource: "metrics",
                name: "query1",
              },
              requestType: "histogram",
              style: {
                palette: "dog_classic",
              },
            },
          ],
        },
        layout: {
          x: 0,
          y: 0,
          width: 4,
          height: 2,
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
