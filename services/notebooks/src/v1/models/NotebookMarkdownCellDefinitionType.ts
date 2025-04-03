import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the markdown cell.
 */
export type NotebookMarkdownCellDefinitionType =
  | typeof MARKDOWN
  | UnparsedObject;
export const MARKDOWN = "markdown";
