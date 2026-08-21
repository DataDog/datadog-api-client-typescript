import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * When an entity counts as having returned. Use `conversion_on` to count only entities that
 * returned during the period itself, or `conversion_on_or_after` to also count later returns.
 */
export type ProductAnalyticsRetentionReturnCondition =
  | typeof CONVERSION_ON
  | typeof CONVERSION_ON_OR_AFTER
  | UnparsedObject;
export const CONVERSION_ON = "conversion_on";
export const CONVERSION_ON_OR_AFTER = "conversion_on_or_after";
