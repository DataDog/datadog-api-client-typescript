import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The source type. The value should always be `sumo_logic`.
 */
export type ObservabilityPipelineSumoLogicSourceType =
  | typeof SUMO_LOGIC
  | UnparsedObject;
export const SUMO_LOGIC = "sumo_logic";
