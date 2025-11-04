import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of Agent version resource.
 */
export type FleetAgentVersionResourceType =
  | typeof AGENT_VERSION
  | UnparsedObject;
export const AGENT_VERSION = "agent_version";
