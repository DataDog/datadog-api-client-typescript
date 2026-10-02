/**
 * Get metric returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.ExperimentsApi(configuration);

// there is a valid "experiment_metric" in the system
const EXPERIMENT_METRIC_DATA_ID = process.env
  .EXPERIMENT_METRIC_DATA_ID as string;

const params: v2.ExperimentsApiGetMetricRequest = {
  metricId: EXPERIMENT_METRIC_DATA_ID,
};

apiInstance
  .getMetric(params)
  .then((data: v2.ExperimentsMetricV2DTO) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
