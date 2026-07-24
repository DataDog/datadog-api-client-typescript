import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The location where the postmortem is created and stored.
 */
export type PostmortemTemplateLocation =
  | typeof DATADOG_NOTEBOOKS
  | typeof CONFLUENCE
  | typeof GOOGLE_DOCS
  | UnparsedObject;
export const DATADOG_NOTEBOOKS = "datadog_notebooks";
export const CONFLUENCE = "confluence";
export const GOOGLE_DOCS = "google_docs";
