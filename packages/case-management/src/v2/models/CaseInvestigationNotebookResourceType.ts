import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Case investigation notebook resource type.
 */
export type CaseInvestigationNotebookResourceType =
  | typeof NOTEBOOK
  | UnparsedObject;
export const NOTEBOOK = "notebook";
