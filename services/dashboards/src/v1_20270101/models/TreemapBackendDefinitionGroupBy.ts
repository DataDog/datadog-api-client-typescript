import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type TreemapBackendDefinitionGroupBy =
  | typeof PROCESS
  | typeof USER
  | typeof FAMILY
  | UnparsedObject;
export const PROCESS = "process";
export const USER = "user";
export const FAMILY = "family";
