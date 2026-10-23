import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * ServiceNow incident resource type.
 */
export type OnCallPageServiceNowIncidentType =
  | typeof SERVICE_NOW_INCIDENTS
  | UnparsedObject;
export const SERVICE_NOW_INCIDENTS = "service_now_incidents";
