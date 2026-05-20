/**
 * Search LLM Observability spans returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.searchLLMObsSpans"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

const params: v2.LLMObservabilityApiSearchLLMObsSpansRequest = {
  body: {
    data: {
      attributes: {
        filter: {
          from: "now-900s",
          mlApp: "my-llm-app",
          query: "@session_id:abc123def456",
          spanId: "abc123def456",
          spanKind: "llm",
          spanName: "llm_call",
          to: "now",
          traceId: "trace-9a8b7c6d5e4f",
        },
        options: {
          includeAttachments: true,
          timeOffset: 0,
        },
        page: {
          cursor: "eyJzdGFydCI6MTAwfQ==",
          limit: 10,
        },
        sort: "-start_ns",
      },
      type: "spans",
    },
  },
};

apiInstance
  .searchLLMObsSpans(params)
  .then((data: v2.LLMObsSpansResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
