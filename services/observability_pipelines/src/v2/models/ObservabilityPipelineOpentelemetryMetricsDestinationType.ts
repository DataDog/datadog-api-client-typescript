import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The destination type. Always `opentelemetry`.
 */
export type ObservabilityPipelineOpentelemetryMetricsDestinationType =
  | typeof OPENTELEMETRY
  | UnparsedObject;
export const OPENTELEMETRY = "opentelemetry";
