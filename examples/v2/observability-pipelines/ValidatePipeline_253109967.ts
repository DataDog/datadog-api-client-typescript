/**
 * Validate an observability pipeline with ClickHouse destination with all fields set returns "OK" response
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
              id: "clickhouse-destination",
              inputs: ["my-processor-group"],
              type: "clickhouse",
              endpointUrlKey: "CLICKHOUSE_ENDPOINT_URL",
              database: "my_database",
              table: "application_logs",
              format: "arrow_stream",
              skipUnknownFields: true,
              dateTimeBestEffort: true,
              compression: {
                algorithm: "gzip",
                level: 6,
              },
              auth: {
                strategy: "basic",
                usernameKey: "CLICKHOUSE_USERNAME",
                passwordKey: "CLICKHOUSE_PASSWORD",
              },
              batch: {
                maxEvents: 1000,
                timeoutSecs: 1,
              },
              batchEncoding: {
                codec: "arrow_stream",
                allowNullableFields: true,
              },
              tls: {
                crtFile: "/path/to/cert.crt",
                caFile: "/path/to/ca.crt",
                keyFile: "/path/to/key.key",
                keyPassKey: "TLS_KEY_PASSPHRASE",
              },
              buffer: {
                type: "memory",
                maxEvents: 500,
                whenFull: "block",
              },
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
                  id: "filter-processor",
                  include: "status:error",
                  type: "filter",
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
        name: "Pipeline with ClickHouse Destination All Fields",
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
