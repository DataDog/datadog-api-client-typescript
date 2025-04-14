/**
 * List active tags and aggregations returns "Success" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.MetricsApi(configuration);

const params: v2.MetricsApiListActiveMetricConfigurationsRequest = {
  metricName: "static_test_metric_donotdelete",
};

apiInstance
  .listActiveMetricConfigurations(params)
  .then((data: v2.MetricSuggestedTagsAndAggregationsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
