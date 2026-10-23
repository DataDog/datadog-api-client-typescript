import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The destination type. Always `opentelemetry`.
 */
export type ObservabilityPipelineOpentelemetryDestinationType =
  | typeof OPENTELEMETRY
  | UnparsedObject;
export const OPENTELEMETRY = "opentelemetry";
