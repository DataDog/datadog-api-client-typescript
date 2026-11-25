import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type GroupBackendDefinitionDefaultState =
  | typeof OPEN
  | typeof CLOSED
  | UnparsedObject;
export const OPEN = "open";
export const CLOSED = "closed";
