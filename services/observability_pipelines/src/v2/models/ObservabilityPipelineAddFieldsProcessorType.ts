import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The processor type. The value should always be `add_fields`.
 */
export type ObservabilityPipelineAddFieldsProcessorType =
  | typeof ADD_FIELDS
  | UnparsedObject;
export const ADD_FIELDS = "add_fields";
