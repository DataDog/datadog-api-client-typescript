import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * AI Gateway provider resource type.
 */
export type AiGatewayProviderType = typeof PROVIDERS | UnparsedObject;
export const PROVIDERS = "providers";
