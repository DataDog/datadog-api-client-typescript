import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Identifies this as an infrastructure-backed host map request.
 */
export type HostMapWidgetInfrastructureRequestRequestType =
  | typeof INFRASTRUCTURE_HOSTMAP
  | UnparsedObject;
export const INFRASTRUCTURE_HOSTMAP = "infrastructure_hostmap";
