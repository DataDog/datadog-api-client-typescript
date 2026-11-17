import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The destination type. Always `opentelemetry`.
 */
export type ObservabilityPipelineOpentelemetryDestinationType =
  | typeof OPENTELEMETRY
  | UnparsedObject;
export const OPENTELEMETRY = "opentelemetry";
