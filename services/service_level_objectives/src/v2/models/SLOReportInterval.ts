import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The frequency at which report data is to be generated.
 */
export type SLOReportInterval =
  | typeof DAILY
  | typeof WEEKLY
  | typeof MONTHLY
  | UnparsedObject;
export const DAILY = "daily";
export const WEEKLY = "weekly";
export const MONTHLY = "monthly";
