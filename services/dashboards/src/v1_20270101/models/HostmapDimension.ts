import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type HostmapDimension =
  | typeof GROUP
  | typeof NODE
  | typeof FILL
  | typeof SIZE
  | UnparsedObject;
export const GROUP = "group";
export const NODE = "node";
export const FILL = "fill";
export const SIZE = "size";
