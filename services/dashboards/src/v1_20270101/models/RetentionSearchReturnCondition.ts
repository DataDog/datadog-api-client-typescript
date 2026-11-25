import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type RetentionSearchReturnCondition =
  | typeof CONVERSION_ON
  | typeof CONVERSION_ON_OR_AFTER
  | UnparsedObject;
export const CONVERSION_ON = "conversion_on";
export const CONVERSION_ON_OR_AFTER = "conversion_on_or_after";
