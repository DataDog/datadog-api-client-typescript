import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type HostmapBackendDefinitionNodeType =
  | typeof CONTAINER
  | typeof HOST
  | UnparsedObject;
export const CONTAINER = "container";
export const HOST = "host";
