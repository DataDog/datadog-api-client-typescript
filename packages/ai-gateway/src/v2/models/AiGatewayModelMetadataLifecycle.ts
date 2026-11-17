import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Model lifecycle state.
 */
export type AiGatewayModelMetadataLifecycle =
  | typeof ACTIVE
  | typeof ALPHA
  | typeof BETA
  | typeof DEPRECATED
  | UnparsedObject;
export const ACTIVE = "active";
export const ALPHA = "alpha";
export const BETA = "beta";
export const DEPRECATED = "deprecated";
