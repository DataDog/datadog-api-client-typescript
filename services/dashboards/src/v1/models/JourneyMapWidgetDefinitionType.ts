import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the Journey Paths widget.
 */
export type JourneyMapWidgetDefinitionType =
  | typeof JOURNEY_MAP
  | UnparsedObject;
export const JOURNEY_MAP = "journey_map";
