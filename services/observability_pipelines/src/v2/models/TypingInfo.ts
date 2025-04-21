import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { ObservabilityPipeline } from "./ObservabilityPipeline";
import { ObservabilityPipelineAddFieldsProcessor } from "./ObservabilityPipelineAddFieldsProcessor";
import { ObservabilityPipelineConfig } from "./ObservabilityPipelineConfig";
import { ObservabilityPipelineCreateRequest } from "./ObservabilityPipelineCreateRequest";
import { ObservabilityPipelineCreateRequestData } from "./ObservabilityPipelineCreateRequestData";
import { ObservabilityPipelineData } from "./ObservabilityPipelineData";
import { ObservabilityPipelineDataAttributes } from "./ObservabilityPipelineDataAttributes";
import { ObservabilityPipelineDatadogAgentSource } from "./ObservabilityPipelineDatadogAgentSource";
import { ObservabilityPipelineDatadogLogsDestination } from "./ObservabilityPipelineDatadogLogsDestination";
import { ObservabilityPipelineFieldValue } from "./ObservabilityPipelineFieldValue";
import { ObservabilityPipelineFilterProcessor } from "./ObservabilityPipelineFilterProcessor";
import { ObservabilityPipelineKafkaSource } from "./ObservabilityPipelineKafkaSource";
import { ObservabilityPipelineKafkaSourceLibrdkafkaOption } from "./ObservabilityPipelineKafkaSourceLibrdkafkaOption";
import { ObservabilityPipelineKafkaSourceSasl } from "./ObservabilityPipelineKafkaSourceSasl";
import { ObservabilityPipelineParseJSONProcessor } from "./ObservabilityPipelineParseJSONProcessor";
import { ObservabilityPipelineQuotaProcessor } from "./ObservabilityPipelineQuotaProcessor";
import { ObservabilityPipelineQuotaProcessorLimit } from "./ObservabilityPipelineQuotaProcessorLimit";
import { ObservabilityPipelineQuotaProcessorOverride } from "./ObservabilityPipelineQuotaProcessorOverride";
import { ObservabilityPipelineRemoveFieldsProcessor } from "./ObservabilityPipelineRemoveFieldsProcessor";
import { ObservabilityPipelineRenameFieldsProcessor } from "./ObservabilityPipelineRenameFieldsProcessor";
import { ObservabilityPipelineRenameFieldsProcessorField } from "./ObservabilityPipelineRenameFieldsProcessorField";
import { ObservabilityPipelineTls } from "./ObservabilityPipelineTls";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ObservabilityPipelineAddFieldsProcessorType: ["add_fields"],
    ObservabilityPipelineDatadogAgentSourceType: ["datadog_agent"],
    ObservabilityPipelineDatadogLogsDestinationType: ["datadog_logs"],
    ObservabilityPipelineFilterProcessorType: ["filter"],
    ObservabilityPipelineKafkaSourceType: ["kafka"],
    ObservabilityPipelineParseJSONProcessorType: ["parse_json"],
    ObservabilityPipelinePipelineKafkaSourceSaslMechanism: [
      "PLAIN",
      "SCRAM-SHA-256",
      "SCRAM-SHA-512",
    ],
    ObservabilityPipelineQuotaProcessorLimitEnforceType: ["bytes", "events"],
    ObservabilityPipelineQuotaProcessorType: ["quota"],
    ObservabilityPipelineRemoveFieldsProcessorType: ["remove_fields"],
    ObservabilityPipelineRenameFieldsProcessorType: ["rename_fields"],
  },
  oneOfMap: {
    ObservabilityPipelineConfigDestinationItem: [
      "ObservabilityPipelineDatadogLogsDestination",
    ],
    ObservabilityPipelineConfigProcessorItem: [
      "ObservabilityPipelineFilterProcessor",
      "ObservabilityPipelineParseJSONProcessor",
      "ObservabilityPipelineQuotaProcessor",
      "ObservabilityPipelineAddFieldsProcessor",
      "ObservabilityPipelineRemoveFieldsProcessor",
      "ObservabilityPipelineRenameFieldsProcessor",
    ],
    ObservabilityPipelineConfigSourceItem: [
      "ObservabilityPipelineKafkaSource",
      "ObservabilityPipelineDatadogAgentSource",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    ObservabilityPipeline: ObservabilityPipeline,
    ObservabilityPipelineAddFieldsProcessor:
      ObservabilityPipelineAddFieldsProcessor,
    ObservabilityPipelineConfig: ObservabilityPipelineConfig,
    ObservabilityPipelineCreateRequest: ObservabilityPipelineCreateRequest,
    ObservabilityPipelineCreateRequestData:
      ObservabilityPipelineCreateRequestData,
    ObservabilityPipelineData: ObservabilityPipelineData,
    ObservabilityPipelineDataAttributes: ObservabilityPipelineDataAttributes,
    ObservabilityPipelineDatadogAgentSource:
      ObservabilityPipelineDatadogAgentSource,
    ObservabilityPipelineDatadogLogsDestination:
      ObservabilityPipelineDatadogLogsDestination,
    ObservabilityPipelineFieldValue: ObservabilityPipelineFieldValue,
    ObservabilityPipelineFilterProcessor: ObservabilityPipelineFilterProcessor,
    ObservabilityPipelineKafkaSource: ObservabilityPipelineKafkaSource,
    ObservabilityPipelineKafkaSourceLibrdkafkaOption:
      ObservabilityPipelineKafkaSourceLibrdkafkaOption,
    ObservabilityPipelineKafkaSourceSasl: ObservabilityPipelineKafkaSourceSasl,
    ObservabilityPipelineParseJSONProcessor:
      ObservabilityPipelineParseJSONProcessor,
    ObservabilityPipelineQuotaProcessor: ObservabilityPipelineQuotaProcessor,
    ObservabilityPipelineQuotaProcessorLimit:
      ObservabilityPipelineQuotaProcessorLimit,
    ObservabilityPipelineQuotaProcessorOverride:
      ObservabilityPipelineQuotaProcessorOverride,
    ObservabilityPipelineRemoveFieldsProcessor:
      ObservabilityPipelineRemoveFieldsProcessor,
    ObservabilityPipelineRenameFieldsProcessor:
      ObservabilityPipelineRenameFieldsProcessor,
    ObservabilityPipelineRenameFieldsProcessorField:
      ObservabilityPipelineRenameFieldsProcessorField,
    ObservabilityPipelineTls: ObservabilityPipelineTls,
  },
};
