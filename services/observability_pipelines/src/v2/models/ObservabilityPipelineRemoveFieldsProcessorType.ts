import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The processor type. The value should always be `remove_fields`.
 */
export type ObservabilityPipelineRemoveFieldsProcessorType =
  | typeof REMOVE_FIELDS
  | UnparsedObject;
export const REMOVE_FIELDS = "remove_fields";
