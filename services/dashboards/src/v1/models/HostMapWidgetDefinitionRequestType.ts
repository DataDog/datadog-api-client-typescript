import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Identifies which host map request format the sibling fields on `HostMapWidgetDefinitionRequests` describe: an infrastructure-backed request or a DDSQL published-dataset request.
 */
export type HostMapWidgetDefinitionRequestType =
  | typeof INFRASTRUCTURE_HOSTMAP
  | typeof DATA_PROJECTION
  | UnparsedObject;
export const INFRASTRUCTURE_HOSTMAP = "infrastructure_hostmap";
export const DATA_PROJECTION = "data_projection";
