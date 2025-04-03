import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The level of detail for the request.
 */
export type ApmStatsQueryRowType =
  | typeof SERVICE
  | typeof RESOURCE
  | typeof SPAN
  | UnparsedObject;
export const SERVICE = "service";
export const RESOURCE = "resource";
export const SPAN = "span";
