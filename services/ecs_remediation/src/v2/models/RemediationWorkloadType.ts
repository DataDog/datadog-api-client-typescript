import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The kind of ECS workload that owns the problematic tasks.
 */
export type RemediationWorkloadType =
  | typeof WORKLOAD_TYPE_UNSPECIFIED
  | typeof SERVICE
  | typeof STANDALONE_TASK
  | typeof DAEMON
  | UnparsedObject;
export const WORKLOAD_TYPE_UNSPECIFIED = "WORKLOAD_TYPE_UNSPECIFIED";
export const SERVICE = "SERVICE";
export const STANDALONE_TASK = "STANDALONE_TASK";
export const DAEMON = "DAEMON";
