import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Incident automation data resource type.
 */
export type IncidentAutomationDataType =
  | typeof INCIDENTS_AUTOMATION_DATA
  | UnparsedObject;
export const INCIDENTS_AUTOMATION_DATA = "incidents_automation_data";
