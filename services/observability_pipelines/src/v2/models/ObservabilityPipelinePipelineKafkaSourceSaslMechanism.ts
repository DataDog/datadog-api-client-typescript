import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * SASL mechanism used for Kafka authentication.
 */
export type ObservabilityPipelinePipelineKafkaSourceSaslMechanism =
  | typeof PLAIN
  | typeof SCRAMNOT_SHANOT_256
  | typeof SCRAMNOT_SHANOT_512
  | UnparsedObject;
export const PLAIN = "PLAIN";
export const SCRAMNOT_SHANOT_256 = "SCRAM-SHA-256";
export const SCRAMNOT_SHANOT_512 = "SCRAM-SHA-512";
