/**
 * Validate an observability pipeline with named and unnamed parse grok include rules returns "OK" response
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
              inputs: ["datadog-agent-source"],
              processors: [
                {
                  enabled: true,
                  id: "parse-grok-processor",
                  include: "*",
                  type: "parse_grok",
                  field: "content",
                  rules: [
                    {
                      include: "service:payments",
                      name: "payments",
                      matchRules: [
                        {
                          name: "MyParsingRule",
                          rule: "%{word:user}",
                        },
                      ],
                    },
                    {
                      include: "service:checkout",
                      name: "checkout",
                      matchRules: [
                        {
                          name: "MyParsingRule",
                          rule: "%{word:user}",
                        },
                      ],
                    },
                    {
                      include: "*",
                      matchRules: [
                        {
                          name: "MyParsingRule",
                          rule: "%{word:user}",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          sources: [
            {
              id: "datadog-agent-source",
              type: "datadog_agent",
            },
          ],
        },
        name: "Pipeline with Named and Unnamed Grok Include Rules",
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
