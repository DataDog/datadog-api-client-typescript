import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Health status of the device, computed from its issues and recent telemetry.
 * `inactive` means the device stopped reporting. `unknown` means no telemetry is available yet.
 */
export type DeviceStatus =
  | typeof HEALTHY
  | typeof DEGRADED
  | typeof CRITICAL
  | typeof INACTIVE
  | typeof UNKNOWN
  | UnparsedObject;
export const HEALTHY = "healthy";
export const DEGRADED = "degraded";
export const CRITICAL = "critical";
export const INACTIVE = "inactive";
export const UNKNOWN = "unknown";
