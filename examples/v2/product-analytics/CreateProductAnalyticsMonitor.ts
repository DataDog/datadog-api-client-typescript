/**
 * Create a Product Analytics monitor returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createProductAnalyticsMonitor"] = true;
const apiInstance = new v2.ProductAnalyticsApi(configuration);

const params: v2.ProductAnalyticsApiCreateProductAnalyticsMonitorRequest = {
  body: {
    data: {
      attributes: {
        message:
          "Conversion from /a to /b dropped over the last hour\n\n@slack-my-alerts-channel",
        name: "Funnel conversion drop",
        options: {
          thresholds: {
            critical: 1,
            warning: 2,
          },
          variables: [
            {
              data_source: "product_analytics_journey",
              name: "query",
              search:
                "{'expression': 'node_0->node_1', 'filters': {'graph_filters': [{'name': '__dd.time_to_convert', 'operator': '<=', 'value': 86400000}]}, 'join_keys': {'primary': '@usr.id'}, 'node_objects': {'node_0': {'data_source': 'product_analytics', 'search': {'query': '@type:view @view.name:/a'}}, 'node_1': {'data_source': 'product_analytics', 'search': {'query': '@type:view @view.name:/b'}}}}",
            },
          ],
        },
        priority: 3,
        query: `formula("query").rollup("sum").last("1h") < 1`,
        tags: {
          chart_id: "chart-1",
          query_type: "funnel",
        },
      },
      type: "pa_monitor_request",
    },
  },
};

apiInstance
  .createProductAnalyticsMonitor(params)
  .then((data: v2.ProductAnalyticsMonitorResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
