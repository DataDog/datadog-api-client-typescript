import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Restriction query resource type.
 */
export type LogsRestrictionQueriesType =
  | typeof LOGS_RESTRICTION_QUERIES
  | UnparsedObject;
export const LOGS_RESTRICTION_QUERIES = "logs_restriction_queries";
