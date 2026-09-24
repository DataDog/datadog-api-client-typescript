/**
 * Get tag key cardinality details returns "Success" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.MetricsApi(configuration);

const params: v2.MetricsApiGetMetricTagCardinalityDetailsRequest = {
  metricName: "metric_name",
};

apiInstance
  .getMetricTagCardinalityDetails(params)
  .then((data: v2.MetricTagCardinalitiesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
