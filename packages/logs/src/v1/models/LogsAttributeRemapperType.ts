import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of logs attribute remapper.
 */
export type LogsAttributeRemapperType =
  | typeof ATTRIBUTE_REMAPPER
  | UnparsedObject;
export const ATTRIBUTE_REMAPPER = "attribute-remapper";
