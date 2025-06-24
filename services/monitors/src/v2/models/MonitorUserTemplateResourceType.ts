import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Monitor user template resource type.
 */
export type MonitorUserTemplateResourceType =
  | typeof MONITOR_USER_TEMPLATE
  | UnparsedObject;
export const MONITOR_USER_TEMPLATE = "monitor-user-template";
