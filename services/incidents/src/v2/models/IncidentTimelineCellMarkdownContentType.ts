import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the Markdown timeline cell.
 */
export type IncidentTimelineCellMarkdownContentType =
  | typeof MARKDOWN
  | UnparsedObject;
export const MARKDOWN = "markdown";
