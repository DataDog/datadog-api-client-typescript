/**
 * Delete tags for multiple metrics returns "Accepted" response
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

const params: v2.MetricsApiDeleteBulkTagsMetricsConfigurationRequest = {
  body: {
    data: {
      attributes: {
        emails: ["sue@example.com", "bob@example.com"],
      },
      id: "kafka.lag",
      type: "metric_bulk_configure_tags",
    },
  },
};

apiInstance
  .deleteBulkTagsMetricsConfiguration(params)
  .then((data: v2.MetricBulkTagConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
