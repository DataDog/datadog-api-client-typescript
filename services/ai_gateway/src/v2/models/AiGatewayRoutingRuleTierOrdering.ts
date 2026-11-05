import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * How a tier orders its targets.
 */
export type AiGatewayRoutingRuleTierOrdering =
  | typeof CONFIGURED
  | typeof WEIGHTED_AFFINITY
  | UnparsedObject;
export const CONFIGURED = "configured";
export const WEIGHTED_AFFINITY = "weighted_affinity";
