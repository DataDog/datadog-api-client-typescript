import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Define whether you want to start (`live`) or pause (`paused`) a
 * Synthetic test.
 */
export type SyntheticsTestPauseStatus =
  | typeof LIVE
  | typeof PAUSED
  | UnparsedObject;
export const LIVE = "live";
export const PAUSED = "paused";
