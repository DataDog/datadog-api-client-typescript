import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Incident configuration resource type.
 */
export type IncidentConfigurationType =
  | typeof INCIDENTS_CONFIGURATIONS
  | UnparsedObject;
export const INCIDENTS_CONFIGURATIONS = "incidents_configurations";
