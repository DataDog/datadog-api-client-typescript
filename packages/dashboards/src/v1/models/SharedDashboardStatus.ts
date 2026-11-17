import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Active means the dashboard is publicly available. Paused means the dashboard is not publicly available.
 */
export type SharedDashboardStatus =
  | typeof ACTIVE
  | typeof PAUSED
  | UnparsedObject;
export const ACTIVE = "active";
export const PAUSED = "paused";
