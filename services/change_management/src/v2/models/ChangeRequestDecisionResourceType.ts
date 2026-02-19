import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Change request decision resource type.
 */
export type ChangeRequestDecisionResourceType =
  | typeof CHANGE_REQUEST_DECISION
  | UnparsedObject;
export const CHANGE_REQUEST_DECISION = "change_request_decision";
