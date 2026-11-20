import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type TimeseriesProjectionDimensionsItemsDimension =
  | typeof GROUP
  | typeof TIME
  | typeof VALUE
  | UnparsedObject;
export const GROUP = "group";
export const TIME = "time";
export const VALUE = "value";
