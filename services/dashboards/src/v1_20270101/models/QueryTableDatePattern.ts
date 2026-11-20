import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type QueryTableDatePattern =
  | typeof MMM_DD_YYYY
  | typeof MMM_D
  | typeof MMM_D__YYYY
  | typeof MM_DD_YYYY
  | typeof DD_MM_YYYY
  | typeof MMMM_D__YYYY
  | UnparsedObject;
export const MMM_DD_YYYY = "MMM dd yyyy";
export const MMM_D = "MMM d";
export const MMM_D__YYYY = "MMM d, yyyy";
export const MM_DD_YYYY = "MM/dd/yyyy";
export const DD_MM_YYYY = "dd/MM/yyyy";
export const MMMM_D__YYYY = "MMMM d, yyyy";
