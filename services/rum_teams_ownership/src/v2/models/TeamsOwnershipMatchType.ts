import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * How the `view_name` is matched against RUM view names.
 */
export type TeamsOwnershipMatchType =
  | typeof EXACT
  | typeof PREFIX
  | UnparsedObject;
export const EXACT = "exact";
export const PREFIX = "prefix";
