import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Overlay applied on top of the Cloudcraft topology.
 */
export type CloudcraftWidgetDefinitionOverlay =
  | typeof OBSERVABILITY
  | typeof CLOUD_COST
  | typeof SECURITY
  | typeof NDM_REACHABILITY
  | typeof MONITORS
  | typeof APM
  | typeof DEFAULT
  | UnparsedObject;
export const OBSERVABILITY = "Observability";
export const CLOUD_COST = "CloudCost";
export const SECURITY = "Security";
export const NDM_REACHABILITY = "NDMReachability";
export const MONITORS = "Monitors";
export const APM = "APM";
export const DEFAULT = "Default";
