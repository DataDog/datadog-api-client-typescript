import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for timeline cells.
 */
export type TimelineCellResourceType = typeof TIMELINE_CELL | UnparsedObject;
export const TIMELINE_CELL = "timeline_cell";
