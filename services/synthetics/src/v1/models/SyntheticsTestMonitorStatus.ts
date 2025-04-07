import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The status of your Synthetic monitor.
 * * `O` for not triggered
 * * `1` for triggered
 * * `2` for no data
 */
export type SyntheticsTestMonitorStatus =
  | typeof UNTRIGGERED
  | typeof TRIGGERED
  | typeof NO_DATA
  | UnparsedObject;
export const UNTRIGGERED = 0;
export const TRIGGERED = 1;
export const NO_DATA = 2;
