/**
 * Configure tags for multiple metrics returns "Accepted" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.MetricsApi(configuration);

// there is a valid "user" in the system
let USER_DATA_ATTRIBUTES_EMAIL = process.env
  .USER_DATA_ATTRIBUTES_EMAIL as string;

let params: v2.MetricsApiCreateBulkTagsMetricsConfigurationRequest = {
  body: {
    data: {
      attributes: {
        emails: [USER_DATA_ATTRIBUTES_EMAIL],
        tags: [
          "test",
          "exampleconfiguretagsformultiplemetricsreturnsacceptedresponse",
        ],
      },
      id: "system.load.1",
      type: "metric_bulk_configure_tags",
    },
  },
};

apiInstance
  .createBulkTagsMetricsConfiguration(params)
  .then((data: v2.MetricBulkTagConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
