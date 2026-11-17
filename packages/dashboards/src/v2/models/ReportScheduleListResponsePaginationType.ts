import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The pagination type.
 */
export type ReportScheduleListResponsePaginationType =
  | typeof OFFSET_LIMIT
  | UnparsedObject;
export const OFFSET_LIMIT = "offset_limit";
