import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of routing target.
 */
export type AiGatewayRoutingRuleTargetType =
  | typeof MODEL
  | typeof ROUTING_RULE
  | UnparsedObject;
export const MODEL = "model";
export const ROUTING_RULE = "routing-rule";
