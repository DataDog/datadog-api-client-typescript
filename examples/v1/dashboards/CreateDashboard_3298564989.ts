/**
 * Create a new dashboard with llm_observability_stream list_stream widget
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    layoutType: "ordered",
    title: "Example-Dashboard with list_stream widget",
    widgets: [
      {
        definition: {
          type: "list_stream",
          requests: [
            {
              responseFormat: "event_list",
              query: {
                dataSource: "llm_observability_stream",
                queryString: "@event_type:span @parent_id:undefined",
                indexes: [],
              },
              columns: [
                {
                  field: "@status",
                  width: "compact",
                },
                {
                  field: "@content.prompt",
                  width: "auto",
                },
                {
                  field: "@content.response.content",
                  width: "auto",
                },
                {
                  field: "timestamp",
                  width: "auto",
                },
                {
                  field: "@ml_app",
                  width: "auto",
                },
                {
                  field: "service",
                  width: "auto",
                },
                {
                  field: "@meta.evaluations.quality",
                  width: "auto",
                },
                {
                  field: "@meta.evaluations.security",
                  width: "auto",
                },
                {
                  field: "@duration",
                  width: "auto",
                },
              ],
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
