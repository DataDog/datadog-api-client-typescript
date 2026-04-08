/**
 * Validate an observability pipeline with amazon S3 source compression returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ObservabilityPipelinesApi(configuration);

const params: v2.ObservabilityPipelinesApiValidatePipelineRequest = {
  body: {
    data: {
      attributes: {
        config: {
          destinations: [
            {
              id: "datadog-logs-destination",
              inputs: ["my-processor-group"],
              type: "datadog_logs",
            },
          ],
          processorGroups: [
            {
              enabled: true,
              id: "my-processor-group",
              include: "service:my-service",
              inputs: ["amazon-s3-source"],
              processors: [
                {
                  enabled: true,
                  id: "filter-processor",
                  include: "service:my-service",
                  type: "filter",
                },
              ],
            },
          ],
          sources: [
            {
              id: "amazon-s3-source",
              type: "amazon_s3",
              region: "us-east-1",
              compression: "gzip",
            },
          ],
        },
        name: "Pipeline with S3 Source Compression",
      },
      type: "pipelines",
    },
  },
};

apiInstance
  .validatePipeline(params)
  .then((data: v2.ValidationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
