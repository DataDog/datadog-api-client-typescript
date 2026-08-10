import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for trigger investigation responses.
 */
export type TriggerInvestigationResponseType =
  | typeof TRIGGER_INVESTIGATION_RESPONSE
  | UnparsedObject;
export const TRIGGER_INVESTIGATION_RESPONSE = "trigger_investigation_response";
