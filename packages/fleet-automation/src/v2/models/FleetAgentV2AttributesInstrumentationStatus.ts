import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The single-step instrumentation status of the Agent.
 */
export type FleetAgentV2AttributesInstrumentationStatus =
  | typeof SUCCESS
  | typeof FAILURE
  | UnparsedObject;
export const SUCCESS = "success";
export const FAILURE = "failure";
