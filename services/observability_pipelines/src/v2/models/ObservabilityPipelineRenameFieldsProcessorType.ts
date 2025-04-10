import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The processor type. The value should always be `rename_fields`.
 */
export type ObservabilityPipelineRenameFieldsProcessorType =
  | typeof RENAME_FIELDS
  | UnparsedObject;
export const RENAME_FIELDS = "rename_fields";
