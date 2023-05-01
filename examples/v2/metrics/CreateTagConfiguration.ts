/**
 * Create a tag configuration returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.MetricsApi(configuration);

const params: v2.MetricsApiCreateTagConfigurationRequest = {
  body: {
    data: {
      type: "manage_tags",
      id: "ExampleMetric",
      attributes: {
        tags: ["app", "datacenter"],
        metricType: "gauge",
      },
    },
  },
  metricName: "ExampleMetric",
};

apiInstance
  .createTagConfiguration(params)
  .then((data: v2.MetricTagConfigurationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
