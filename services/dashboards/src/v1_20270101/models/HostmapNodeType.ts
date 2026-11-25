import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type HostmapNodeType =
  | typeof CLUSTER
  | typeof CONTAINER
  | typeof HOST
  | typeof POD
  | UnparsedObject;
export const CLUSTER = "cluster";
export const CONTAINER = "container";
export const HOST = "host";
export const POD = "pod";
