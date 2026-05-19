import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of content in the timeline cell. Currently only `COMMENT` is supported in this endpoint.
 */
export type TimelineCellType = typeof COMMENT | UnparsedObject;
export const COMMENT = "COMMENT";
