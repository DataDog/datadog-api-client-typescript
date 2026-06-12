import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Status of the shared dashboard.
 */
export type SharedDashboardStatus =
  | typeof ACTIVE
  | typeof PAUSED
  | UnparsedObject;
export const ACTIVE = "active";
export const PAUSED = "paused";
