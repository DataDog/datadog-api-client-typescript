import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Effective source of the model pricing data.
 */
export type AiGatewayModelPricingEffectiveSource =
  | typeof CATALOG_AUTO
  | typeof MODEL_OVERRIDE
  | typeof MODELS_DEV
  | typeof UNPRICED
  | typeof UNKNOWN
  | UnparsedObject;
export const CATALOG_AUTO = "catalog_auto";
export const MODEL_OVERRIDE = "model_override";
export const MODELS_DEV = "models_dev";
export const UNPRICED = "unpriced";
export const UNKNOWN = "unknown";
