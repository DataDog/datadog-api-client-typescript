import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Identifies the resource type for a responder group linked to a schedule's on-call responders lookup.
 */
export type ScheduleOnCallRespondersDataRelationshipsRespondersDataItemsType =
  | typeof SCHEDULE_ONCALL_RESPONDER
  | UnparsedObject;
export const SCHEDULE_ONCALL_RESPONDER = "schedule_oncall_responder";
