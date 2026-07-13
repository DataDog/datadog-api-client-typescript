import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for trigger investigation requests.
 */
export type TriggerInvestigationRequestType =
  | typeof TRIGGER_INVESTIGATION_REQUEST
  | UnparsedObject;
export const TRIGGER_INVESTIGATION_REQUEST = "trigger_investigation_request";
