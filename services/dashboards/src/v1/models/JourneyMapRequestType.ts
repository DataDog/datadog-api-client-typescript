import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Request type for the Journey Paths widget.
 */
export type JourneyMapRequestType = typeof JOURNEY_MAP | UnparsedObject;
export const JOURNEY_MAP = "journey_map";
