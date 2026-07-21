import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The trigger event for an incident rule.
 */
export type IncidentRuleTriggerType =
  | typeof INCIDENT_SAVED_TRIGGER
  | typeof INCIDENT_CREATED_TRIGGER
  | typeof INCIDENT_MODIFIED_TRIGGER
  | UnparsedObject;
export const INCIDENT_SAVED_TRIGGER = "incident_saved_trigger";
export const INCIDENT_CREATED_TRIGGER = "incident_created_trigger";
export const INCIDENT_MODIFIED_TRIGGER = "incident_modified_trigger";
