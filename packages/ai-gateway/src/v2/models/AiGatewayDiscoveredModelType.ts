import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Discovered provider model resource type.
 */
export type AiGatewayDiscoveredModelType =
  | typeof PROVIDER_MODELS
  | UnparsedObject;
export const PROVIDER_MODELS = "provider-models";
