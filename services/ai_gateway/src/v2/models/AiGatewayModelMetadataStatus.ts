import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Completeness of the matched source record. Partial also identifies metadata from a base model for a dated snapshot or from a shared canonical-model fallback.
 */
export type AiGatewayModelMetadataStatus =
  | typeof AVAILABLE
  | typeof PARTIAL
  | UnparsedObject;
export const AVAILABLE = "available";
export const PARTIAL = "partial";
