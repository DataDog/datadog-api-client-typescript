/**
 * List tag indexing rules for a metric returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.MetricsApi(configuration);

const params: v2.MetricsApiListTagIndexingRulesForMetricRequest = {
  metricName: "ExampleMetric",
};

apiInstance
  .listTagIndexingRulesForMetric(params)
  .then((data: v2.TagIndexingRulesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
