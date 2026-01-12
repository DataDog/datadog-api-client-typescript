import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The destination type. The value should always be `kafka`.
 */
export type ObservabilityPipelineKafkaDestinationType =
  | typeof KAFKA
  | UnparsedObject;
export const KAFKA = "kafka";
