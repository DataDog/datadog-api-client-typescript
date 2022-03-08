import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.MetricsApi(configuration);

let params: v2.MetricsApiCreateBulkTagsMetricsConfigurationRequest = {
  // MetricBulkTagConfigCreateRequest
  body: {
    data: {
      attributes: {
        emails: ["sue@example.com", "bob@example.com"],
        tags: ["host", "pod_name", "is_shadow"],
      },
      id: "kafka.lag",
      type: "metric_bulk_configure_tags",
    },
  },
};

apiInstance
  .createBulkTagsMetricsConfiguration(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
