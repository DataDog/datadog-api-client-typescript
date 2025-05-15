import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The source type. The value should always be `fluent_bit`.
 */
export type ObservabilityPipelineFluentBitSourceType =
  | typeof FLUENT_BIT
  | UnparsedObject;
export const FLUENT_BIT = "fluent_bit";
