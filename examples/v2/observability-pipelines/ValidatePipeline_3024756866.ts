/**
 * Validate an observability pipeline with OCSF mapper custom mapping returns "OK" response
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
                  id: "ocsf-mapper-processor",
                  include: "service:my-service",
                  mappings: [
                    {
                      include: "source:custom",
                      mapping: {
                        mapping: [
                          {
                            _default: "",
                            dest: "time",
                            source: "timestamp",
                          },
                          {
                            _default: "",
                            dest: "severity",
                            source: "level",
                          },
                          {
                            _default: "",
                            dest: "device.type",
                            lookup: {
                              table: [
                                {
                                  contains: "Desktop",
                                  value: "desktop",
                                },
                              ],
                            },
                            source: "host.type",
                          },
                        ],
                        metadata: {
                          _class: "Device Inventory Info",
                          profiles: ["container"],
                          version: "1.3.0",
                        },
                        version: 1,
                      },
                    },
                  ],
                  type: "ocsf_mapper",
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
        name: "OCSF Custom Mapper Pipeline",
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
