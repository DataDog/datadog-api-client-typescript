import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Sort field and direction for reference tables. Use field name for ascending, prefix with "-" for descending.
 */
export type ReferenceTableSortType =
  | typeof UPDATED_AT
  | typeof TABLE_NAME
  | typeof STATUS
  | typeof MINUS_UPDATED_AT
  | typeof MINUS_TABLE_NAME
  | typeof MINUS_STATUS
  | UnparsedObject;
export const UPDATED_AT = "updated_at";
export const TABLE_NAME = "table_name";
export const STATUS = "status";
export const MINUS_UPDATED_AT = "-updated_at";
export const MINUS_TABLE_NAME = "-table_name";
export const MINUS_STATUS = "-status";
