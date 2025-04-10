import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The source type. The value should always be `kafka`.
 */
export type ObservabilityPipelineKafkaSourceType =
  | typeof KAFKA
  | UnparsedObject;
export const KAFKA = "kafka";
