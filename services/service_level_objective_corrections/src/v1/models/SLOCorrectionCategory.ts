import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Category the SLO correction belongs to.
 */
export type SLOCorrectionCategory =
  | typeof SCHEDULED_MAINTENANCE
  | typeof OUTSIDE_BUSINESS_HOURS
  | typeof DEPLOYMENT
  | typeof OTHER
  | UnparsedObject;
export const SCHEDULED_MAINTENANCE = "Scheduled Maintenance";
export const OUTSIDE_BUSINESS_HOURS = "Outside Business Hours";
export const DEPLOYMENT = "Deployment";
export const OTHER = "Other";
