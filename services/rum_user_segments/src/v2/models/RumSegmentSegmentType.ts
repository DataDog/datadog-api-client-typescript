import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of a segment based on its data query configuration.
 */
export type RumSegmentSegmentType =
  | typeof STATIC
  | typeof EVENT_PLATFORM
  | typeof COMBINATION
  | typeof JOURNEYS
  | typeof REFERENCE_TABLE
  | typeof TEMPLATES
  | UnparsedObject;
export const STATIC = "static";
export const EVENT_PLATFORM = "event_platform";
export const COMBINATION = "combination";
export const JOURNEYS = "journeys";
export const REFERENCE_TABLE = "reference_table";
export const TEMPLATES = "templates";
