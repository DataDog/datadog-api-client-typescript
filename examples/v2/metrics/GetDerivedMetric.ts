/**
 * Get a derived metric returns "OK" response
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

// there is a valid "derived_metric" in the system
const DERIVED_METRIC_DATA_ID = process.env.DERIVED_METRIC_DATA_ID as string;

const params: v2.MetricsApiGetDerivedMetricRequest = {
  metricName: DERIVED_METRIC_DATA_ID,
};

apiInstance
  .getDerivedMetric(params)
  .then((data: v2.DerivedMetricResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
