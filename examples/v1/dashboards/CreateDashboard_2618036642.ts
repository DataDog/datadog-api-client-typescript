/**
 * Create a new dashboard with trace_stream widget
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    layoutType: "ordered",
    title:
      "Example-Create_a_new_dashboard_with_trace_stream_widget with list_stream widget",
    widgets: [
      {
        definition: {
          type: "list_stream",
          requests: [
            {
              columns: [
                {
                  width: "auto",
                  field: "timestamp",
                },
                {
                  width: "auto",
                  field: "service",
                },
              ],
              query: {
                dataSource: "trace_stream",
                queryString: "",
              },
              responseFormat: "event_list",
            },
          ],
        },
      },
    ],
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
