import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Priority of the Salesforce incident created from this template.
 */
export type SalesforceIncidentsTemplatePriority =
  | typeof CRITICAL
  | typeof HIGH
  | typeof MODERATE
  | typeof LOW
  | UnparsedObject;
export const CRITICAL = "Critical";
export const HIGH = "High";
export const MODERATE = "Moderate";
export const LOW = "Low";
