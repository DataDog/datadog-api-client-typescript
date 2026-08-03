import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the agent version resource.
 */
export type FleetAgentVersionV2ResourceType =
  | typeof AGENT_VERSION
  | UnparsedObject;
export const AGENT_VERSION = "agent_version";
