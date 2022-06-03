/**
 * List tag configuration by name returns "Success" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.MetricsApi(configuration);

// there is a valid "metric_tag_configuration" in the system
const METRIC_TAG_CONFIGURATION_DATA_ID = process.env
  .METRIC_TAG_CONFIGURATION_DATA_ID as string;

const params: v2.MetricsApiListTagConfigurationByNameRequest = {
  metricName: METRIC_TAG_CONFIGURATION_DATA_ID,
};

apiInstance
  .listTagConfigurationByName(params)
  .then((data: v2.MetricTagConfigurationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
