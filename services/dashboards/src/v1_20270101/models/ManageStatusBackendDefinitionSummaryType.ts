import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type ManageStatusBackendDefinitionSummaryType =
  | typeof GROUPS
  | typeof MONITORS
  | typeof COMBINED
  | UnparsedObject;
export const GROUPS = "groups";
export const MONITORS = "monitors";
export const COMBINED = "combined";
