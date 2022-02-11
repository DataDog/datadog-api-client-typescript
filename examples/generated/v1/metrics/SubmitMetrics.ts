import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.MetricsApi(configuration);

let params: v1.MetricsApiSubmitMetricsRequest = {
  // MetricsPayload
  body: {
    series: [
      {
        host: "test.example.com",
        interval: 20,
        metric: "system.load.1",
        points: [1.575317847e9, 0.5],
        tags: ["environment:test"],
        type: "rate",
      },
    ],
  },
  // MetricContentEncoding | HTTP header used to compress the media-type. (optional)
  contentEncoding: "deflate",
};

apiInstance
  .submitMetrics(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
