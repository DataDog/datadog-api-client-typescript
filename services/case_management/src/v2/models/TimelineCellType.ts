import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Timeline cell content type
 */
export type TimelineCellType = typeof COMMENT | UnparsedObject;
export const COMMENT = "COMMENT";
