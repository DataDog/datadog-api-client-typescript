/**
 * Get a list of metrics with a tag filter returns "Success" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.MetricsApi(configuration);

const params: v2.MetricsApiListTagConfigurationsRequest = {
  filterTags: "ExampleMetric",
};

apiInstance
  .listTagConfigurations(params)
  .then((data: v2.MetricsAndMetricTagConfigurationsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
