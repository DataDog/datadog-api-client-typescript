import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type DoraIndexes =
  | typeof COMMIT
  | typeof FAILURE
  | typeof DEPLOYMENT
  | typeof PULL_REQUEST
  | UnparsedObject;
export const COMMIT = "commit";
export const FAILURE = "failure";
export const DEPLOYMENT = "deployment";
export const PULL_REQUEST = "pull_request";
