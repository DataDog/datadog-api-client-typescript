import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The kind of affected resource. The meaning of `resource_id` depends on this: hostname for `host`, DaemonSet UID for `deployment` (node Agent), cluster UUID for `cluster`, hostname of the host running the Cluster Agent for `cluster_agent`, or OpenTelemetry collector ID for `otel`.
 */
export type AgentHealthIssueResourceKind =
  | typeof HOST
  | typeof DEPLOYMENT
  | typeof CLUSTER
  | typeof CLUSTER_AGENT
  | typeof OTEL
  | UnparsedObject;
export const HOST = "host";
export const DEPLOYMENT = "deployment";
export const CLUSTER = "cluster";
export const CLUSTER_AGENT = "cluster_agent";
export const OTEL = "otel";
