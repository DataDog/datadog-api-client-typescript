import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type NoteBackendDefinitionTickEdge =
  | typeof LEFT
  | typeof RIGHT
  | typeof TOP
  | typeof BOTTOM
  | UnparsedObject;
export const LEFT = "left";
export const RIGHT = "right";
export const TOP = "top";
export const BOTTOM = "bottom";
