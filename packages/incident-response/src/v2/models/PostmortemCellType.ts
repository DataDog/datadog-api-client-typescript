import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The postmortem cell resource type.
 */
export type PostmortemCellType = typeof MARKDOWN | UnparsedObject;
export const MARKDOWN = "markdown";
