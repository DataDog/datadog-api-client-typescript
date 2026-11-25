import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type CheckStatusBackendDefinitionGrouping =
  | typeof CHECK
  | typeof CLUSTER
  | UnparsedObject;
export const CHECK = "check";
export const CLUSTER = "cluster";
