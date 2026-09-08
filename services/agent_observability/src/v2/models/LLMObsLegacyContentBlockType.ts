import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type discriminator for an existing non-frontend display block.
 */
export type LLMObsLegacyContentBlockType =
  | typeof MARKDOWN
  | typeof HEADER
  | typeof TEXT
  | typeof JSON
  | typeof IMAGE
  | typeof WIDGET
  | typeof LLMOBS_TRACE
  | UnparsedObject;
export const MARKDOWN = "markdown";
export const HEADER = "header";
export const TEXT = "text";
export const JSON = "json";
export const IMAGE = "image";
export const WIDGET = "widget";
export const LLMOBS_TRACE = "llmobs_trace";
