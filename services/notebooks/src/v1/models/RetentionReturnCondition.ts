import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Condition for counting user return.
 */
export type RetentionReturnCondition =
  | typeof CONVERSION_ON
  | typeof CONVERSION_ON_OR_AFTER
  | UnparsedObject;
export const CONVERSION_ON = "conversion_on";
export const CONVERSION_ON_OR_AFTER = "conversion_on_or_after";
