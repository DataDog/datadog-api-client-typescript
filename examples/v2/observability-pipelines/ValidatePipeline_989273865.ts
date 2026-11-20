/**
 * Validate an observability pipeline with CrowdStrike FDR source returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
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
              inputs: ["crowdstrike-fdr-source"],
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
              id: "crowdstrike-fdr-source",
              type: "crowdstrike_fdr",
              region: "us-west-2",
              urlKey: "CROWDSTRIKE_FDR_SQS_URL",
              accessKeyIdKey: "CROWDSTRIKE_FDR_AWS_ACCESS_KEY_ID",
              secretAccessKeyKey: "CROWDSTRIKE_FDR_AWS_SECRET_ACCESS_KEY",
              visibilityTimeoutSecs: 300,
              clientConcurrency: 4,
              maxNumberOfMessages: 1,
            },
          ],
        },
        name: "Pipeline with CrowdStrike FDR Source",
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
