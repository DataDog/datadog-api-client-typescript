import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Agent type associated with the resource.
 */
export type AgentHealthAgentType =
  | typeof NODE
  | typeof CLUSTER
  | UnparsedObject;
export const NODE = "node";
export const CLUSTER = "cluster";
