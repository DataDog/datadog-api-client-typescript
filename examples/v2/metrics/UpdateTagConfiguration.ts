/**
 * Update a tag configuration returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.MetricsApi(configuration);

// there is a valid "metric_tag_configuration" in the system
const METRIC_TAG_CONFIGURATION_DATA_ID = process.env
  .METRIC_TAG_CONFIGURATION_DATA_ID as string;

const params: v2.MetricsApiUpdateTagConfigurationRequest = {
  body: {
    data: {
      type: "manage_tags",
      id: METRIC_TAG_CONFIGURATION_DATA_ID,
      attributes: {
        tags: ["app"],
      },
    },
  },
  metricName: METRIC_TAG_CONFIGURATION_DATA_ID,
};

apiInstance
  .updateTagConfiguration(params)
  .then((data: v2.MetricTagConfigurationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
