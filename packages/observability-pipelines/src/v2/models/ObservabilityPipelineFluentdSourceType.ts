import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The source type. The value should always be `fluentd.
 */
export type ObservabilityPipelineFluentdSourceType =
  | typeof FLUENTD
  | UnparsedObject;
export const FLUENTD = "fluentd";
