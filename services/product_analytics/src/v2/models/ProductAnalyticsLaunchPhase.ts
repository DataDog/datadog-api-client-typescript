import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Lifecycle phase of a launch. A new launch starts in `plan` or `setup`, and defaults to `plan`.
 * Allowed changes: `plan` to `setup`, `setup` to `ready`, `ready` to `setup` or `launched`, and `launched` to
 * `ready`.
 */
export type ProductAnalyticsLaunchPhase =
  | typeof PLAN
  | typeof SETUP
  | typeof READY
  | typeof LAUNCHED
  | UnparsedObject;
export const PLAN = "plan";
export const SETUP = "setup";
export const READY = "ready";
export const LAUNCHED = "launched";
