import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Reason the content of the Custom Costs file is not returned. Only set when `content` is omitted.
 */
export type CustomCostsFilePreviewUnavailableReason =
  | typeof CHARGE_PERIOD_OUTSIDE_RETENTION_WINDOW
  | UnparsedObject;
export const CHARGE_PERIOD_OUTSIDE_RETENTION_WINDOW =
  "CHARGE_PERIOD_OUTSIDE_RETENTION_WINDOW";
