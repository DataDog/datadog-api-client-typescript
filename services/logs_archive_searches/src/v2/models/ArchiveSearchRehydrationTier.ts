import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Storage tier the matched logs are rehydrated into.
 */
export type ArchiveSearchRehydrationTier =
  | typeof STANDARD
  | typeof FLEX
  | UnparsedObject;
export const STANDARD = "standard";
export const FLEX = "flex";
