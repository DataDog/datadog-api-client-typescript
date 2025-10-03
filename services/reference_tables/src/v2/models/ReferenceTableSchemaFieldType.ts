import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The field type for reference table schema fields.
 */
export type ReferenceTableSchemaFieldType =
  | typeof STRING
  | typeof INT32
  | UnparsedObject;
export const STRING = "STRING";
export const INT32 = "INT32";
