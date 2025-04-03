import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Case field that can be sorted on
 */
export type CaseSortableField =
  | typeof CREATED_AT
  | typeof PRIORITY
  | typeof STATUS
  | UnparsedObject;
export const CREATED_AT = "created_at";
export const PRIORITY = "priority";
export const STATUS = "status";
