/**
 * Validate an observability pipeline with HTTP server source valid_tokens returns "OK" response
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
              inputs: ["http-server-source"],
              processors: [
                {
                  enabled: true,
                  id: "filter-processor",
                  include: "status:error",
                  type: "filter",
                },
              ],
            },
          ],
          sources: [
            {
              id: "http-server-source",
              type: "http_server",
              authStrategy: "none",
              decoding: "json",
              validTokens: [
                {
                  tokenKey: "HTTP_SERVER_TOKEN",
                  enabled: true,
                  pathToToken: {
                    header: "X-Token",
                  },
                  fieldToAdd: {
                    key: "token_name",
                    value: "primary_token",
                  },
                },
                {
                  tokenKey: "HTTP_SERVER_TOKEN_BACKUP",
                  enabled: true,
                  pathToToken: "path",
                },
              ],
            },
          ],
        },
        name: "Pipeline with HTTP server valid_tokens",
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
