import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Comparison applied by this filter.
 */
export type ExperimentsPropertyNullFilterInputOperation =
  | typeof IS_NULL
  | typeof IS_NOT_NULL
  | UnparsedObject;
export const IS_NULL = "IS_NULL";
export const IS_NOT_NULL = "IS_NOT_NULL";
