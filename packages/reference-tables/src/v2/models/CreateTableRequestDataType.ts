import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Reference table resource type.
 */
export type CreateTableRequestDataType =
  | typeof REFERENCE_TABLE
  | UnparsedObject;
export const REFERENCE_TABLE = "reference_table";
