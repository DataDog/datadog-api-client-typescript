import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Metadata type of the notebook.
 */
export type NotebookMetadataType =
  | typeof POSTMORTEM
  | typeof RUNBOOK
  | typeof INVESTIGATION
  | typeof DOCUMENTATION
  | typeof REPORT
  | UnparsedObject;
export const POSTMORTEM = "postmortem";
export const RUNBOOK = "runbook";
export const INVESTIGATION = "investigation";
export const DOCUMENTATION = "documentation";
export const REPORT = "report";
