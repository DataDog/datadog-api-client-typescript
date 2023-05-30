/**
 * Get a monitor configuration policy returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.MetricsApi(configuration);

const params: v2.MetricsApiCreateTagConfigurationRequest = {
  body: {
    data: {
      attributes: {
        includePercentiles: false,
        metricType: "distribution",
        tags: ["app", "datacenter"],
      },
      id: "http.endpoint.request",
      type: "manage_tags",
    },
  },
  metricName: "metric_name",
};

apiInstance
  .createTagConfiguration(params)
  .then((data: v2.MetricTagConfigurationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
