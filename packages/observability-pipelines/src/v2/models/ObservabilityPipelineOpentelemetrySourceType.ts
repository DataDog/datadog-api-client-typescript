import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The source type. The value should always be `opentelemetry`.
 */
export type ObservabilityPipelineOpentelemetrySourceType =
  | typeof OPENTELEMETRY
  | UnparsedObject;
export const OPENTELEMETRY = "opentelemetry";
