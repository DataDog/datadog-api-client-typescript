import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Timeline cell JSON:API resource type
 */
export type TimelineCellResourceType = typeof TIMELINE_CELL | UnparsedObject;
export const TIMELINE_CELL = "timeline_cell";
