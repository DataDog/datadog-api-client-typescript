import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.MetricsApi(configuration);

let params: v1.MetricsApiUpdateMetricMetadataRequest = {
  // string | Name of the metric for which to edit metadata.
  metricName: "metric_name_example",
  // MetricMetadata | New metadata.
  body: {
    description: "description_example",
    perUnit: "second",
    shortName: "shortName_example",
    statsdInterval: 1,
    type: "count",
    unit: "byte",
  },
};

apiInstance
  .updateMetricMetadata(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
