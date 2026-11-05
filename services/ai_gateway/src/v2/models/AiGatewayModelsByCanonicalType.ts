import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Canonical model grouping resource type.
 */
export type AiGatewayModelsByCanonicalType =
  | typeof MODELS_BY_CANONICAL
  | UnparsedObject;
export const MODELS_BY_CANONICAL = "models-by-canonical";
