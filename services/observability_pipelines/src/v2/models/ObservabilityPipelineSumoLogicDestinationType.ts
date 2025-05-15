import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The destination type. The value should always be `sumo_logic`.
 */
export type ObservabilityPipelineSumoLogicDestinationType =
  | typeof SUMO_LOGIC
  | UnparsedObject;
export const SUMO_LOGIC = "sumo_logic";
