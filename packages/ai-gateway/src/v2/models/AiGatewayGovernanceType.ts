import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * AI Gateway governance resource type.
 */
export type AiGatewayGovernanceType = typeof GOVERNANCE | UnparsedObject;
export const GOVERNANCE = "governance";
