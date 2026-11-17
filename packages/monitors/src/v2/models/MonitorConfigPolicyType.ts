import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The monitor configuration policy type.
 * `tag` enforces required tags on monitors.
 * `downtime` sets a maximum downtime duration for the organization.
 */
export type MonitorConfigPolicyType =
  | typeof TAG
  | typeof DOWNTIME
  | UnparsedObject;
export const TAG = "tag";
export const DOWNTIME = "downtime";
