import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Discriminator for a single `display_block` content block. Adding a
 * variant requires coordinated changes in the frontend renderer.
 */
export type LLMObsContentBlockType =
  | typeof MARKDOWN
  | typeof HEADER
  | typeof TEXT
  | typeof JSON
  | typeof IMAGE
  | typeof UNIVIZ
  | typeof LLMOBS_TRACE
  | typeof FRONTEND
  | UnparsedObject;
export const MARKDOWN = "markdown";
export const HEADER = "header";
export const TEXT = "text";
export const JSON = "json";
export const IMAGE = "image";
export const UNIVIZ = "univiz";
export const LLMOBS_TRACE = "llmobs_trace";
export const FRONTEND = "frontend";
