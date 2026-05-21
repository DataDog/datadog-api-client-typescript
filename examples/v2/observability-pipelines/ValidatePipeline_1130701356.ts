/**
 * Validate an observability pipeline with Splunk HEC source valid_tokens returns "OK" response
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
              inputs: ["splunk-hec-source"],
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
              id: "splunk-hec-source",
              type: "splunk_hec",
              validTokens: [
                {
                  tokenKey: "SPLUNK_HEC_TOKEN",
                  enabled: true,
                  fieldToAdd: {
                    key: "token_name",
                    value: "primary_token",
                  },
                },
                {
                  tokenKey: "SPLUNK_HEC_TOKEN_BACKUP",
                  enabled: false,
                },
              ],
            },
          ],
        },
        name: "Pipeline with Splunk HEC valid_tokens",
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
