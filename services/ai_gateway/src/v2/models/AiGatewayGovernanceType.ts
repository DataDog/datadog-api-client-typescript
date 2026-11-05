import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * AI Gateway governance resource type.
 */
export type AiGatewayGovernanceType = typeof GOVERNANCE | UnparsedObject;
export const GOVERNANCE = "governance";
