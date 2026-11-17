import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * ServiceNow record prompt resource type.
 */
export type IncidentServiceNowRecordPromptType =
  | typeof INCIDENT_SERVICENOW_RECORD_PROMPT
  | UnparsedObject;
export const INCIDENT_SERVICENOW_RECORD_PROMPT =
  "incident_servicenow_record_prompt";
