import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Widget experience types that differentiate between the products using the specific widget.
 */
export type WidgetExperienceType =
  | typeof CCM_REPORTS
  | typeof LOGS_REPORTS
  | typeof CSV_REPORTS
  | typeof PRODUCT_ANALYTICS
  | UnparsedObject;
export const CCM_REPORTS = "ccm_reports";
export const LOGS_REPORTS = "logs_reports";
export const CSV_REPORTS = "csv_reports";
export const PRODUCT_ANALYTICS = "product_analytics";
