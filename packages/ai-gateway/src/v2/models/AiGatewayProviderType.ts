import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * AI Gateway provider resource type.
 */
export type AiGatewayProviderType = typeof PROVIDERS | UnparsedObject;
export const PROVIDERS = "providers";
