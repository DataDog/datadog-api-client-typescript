import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of Agent info resource.
 */
export type FleetAgentInfoResourceType =
  | typeof DATADOG_AGENT_KEY
  | UnparsedObject;
export const DATADOG_AGENT_KEY = "datadog_agent_key";
