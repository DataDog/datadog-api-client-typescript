import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * AI Gateway routing rule resource type.
 */
export type AiGatewayRoutingRuleType = typeof ROUTING_RULES | UnparsedObject;
export const ROUTING_RULES = "routing-rules";
