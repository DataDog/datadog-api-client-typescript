import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be `critical_assets`.
 */
export type SecurityMonitoringCriticalAssetType =
  | typeof CRITICAL_ASSETS
  | UnparsedObject;
export const CRITICAL_ASSETS = "critical_assets";
