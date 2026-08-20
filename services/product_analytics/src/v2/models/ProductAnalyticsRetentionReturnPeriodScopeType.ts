import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The discriminator identifying a scope narrowed to one return period.
 */
export type ProductAnalyticsRetentionReturnPeriodScopeType =
  | typeof RETURN_PERIOD
  | UnparsedObject;
export const RETURN_PERIOD = "return_period";
