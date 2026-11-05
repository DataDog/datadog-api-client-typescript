import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * AI Gateway routing policy resource type.
 */
export type AiGatewayPolicyType = typeof ROUTING_DOCUMENTS | UnparsedObject;
export const ROUTING_DOCUMENTS = "routing-documents";
