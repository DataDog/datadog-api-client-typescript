/**
 * Validate an observability pipeline with enrichment table secret field lookup returns "OK" response
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
              inputs: ["datadog-agent-source"],
              processors: [
                {
                  enabled: true,
                  id: "enrichment-processor",
                  include: "*",
                  target: "enriched",
                  type: "enrichment_table",
                  file: {
                    encoding: {
                      delimiter: ",",
                      type: "csv",
                      includesHeaders: true,
                    },
                    key: [
                      {
                        column: "user_id",
                        comparison: "equals",
                        field: {
                          secret: "LOOKUP_KEY_SECRET",
                        },
                      },
                    ],
                    path: "/etc/enrichment/lookup.csv",
                    schema: [
                      {
                        column: "user_id",
                        type: "string",
                      },
                    ],
                  },
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
        name: "Pipeline with Enrichment Table Secret Field Lookup",
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
