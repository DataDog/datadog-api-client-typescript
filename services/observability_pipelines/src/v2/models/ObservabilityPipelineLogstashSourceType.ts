import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The source type. The value should always be `logstash`.
 */
export type ObservabilityPipelineLogstashSourceType =
  | typeof LOGSTASH
  | UnparsedObject;
export const LOGSTASH = "logstash";
