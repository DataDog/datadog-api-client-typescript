import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type ManageStatusBackendDefinitionDisplayFormat =
  | typeof COUNTS
  | typeof COUNTSANDLIST
  | typeof LIST
  | UnparsedObject;
export const COUNTS = "counts";
export const COUNTSANDLIST = "countsAndList";
export const LIST = "list";
