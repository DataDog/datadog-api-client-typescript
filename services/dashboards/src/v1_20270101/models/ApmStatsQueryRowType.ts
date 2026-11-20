import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type ApmStatsQueryRowType =
  | typeof SERVICE
  | typeof SPAN
  | typeof RESOURCE
  | UnparsedObject;
export const SERVICE = "service";
export const SPAN = "span";
export const RESOURCE = "resource";
