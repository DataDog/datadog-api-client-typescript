/**
 * Create a new dashboard with timeseries widget containing style attributes
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

let params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    layoutType: "ordered",
    title:
      "Example-Create_a_new_dashboard_with_timeseries_widget_containing_style_attributes with timeseries widget",
    widgets: [
      {
        definition: {
          type: "timeseries",
          requests: [
            {
              q: "sum:trace.test.errors{env:prod,service:datadog-api-spec} by {resource_name}.as_count()",
              onRightYaxis: false,
              style: {
                palette: "warm",
                lineType: "solid",
                lineWidth: "normal",
              },
              displayType: "bars",
            },
          ],
        },
      },
    ],
  },
};

apiInstance
  .createDashboard(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
