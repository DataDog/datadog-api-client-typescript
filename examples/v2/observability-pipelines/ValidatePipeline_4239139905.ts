/**
 * Validate a metrics pipeline with enrichment table processor reference table returns "OK" response
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
          pipelineType: "metrics",
          destinations: [
            {
              id: "datadog-metrics-destination",
              inputs: ["my-processor-group"],
              type: "datadog_metrics",
            },
          ],
          processorGroups: [
            {
              enabled: true,
              id: "my-processor-group",
              include: "*",
              inputs: ["datadog-agent-source"],
              processors: [
                {
                  enabled: true,
                  id: "enrichment-table-processor",
                  include: "*",
                  type: "enrichment_table",
                  referenceTable: {
                    tableId: "metric-enrichment",
                    key: {
                      source: {
                        type: "metric_name",
                      },
                    },
                    columns: ["environment", "team"],
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
        name: "Metrics Pipeline with Enrichment Table Reference Table",
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
