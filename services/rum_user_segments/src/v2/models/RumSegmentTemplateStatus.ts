import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The status of a segment template.
 */
export type RumSegmentTemplateStatus =
  | typeof ACTIVE
  | typeof DEPRECATED
  | typeof ARCHIVED
  | UnparsedObject;
export const ACTIVE = "active";
export const DEPRECATED = "deprecated";
export const ARCHIVED = "archived";
