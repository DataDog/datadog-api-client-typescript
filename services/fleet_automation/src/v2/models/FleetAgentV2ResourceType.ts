import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the agent resource.
 */
export type FleetAgentV2ResourceType = typeof AGENT | UnparsedObject;
export const AGENT = "agent";
