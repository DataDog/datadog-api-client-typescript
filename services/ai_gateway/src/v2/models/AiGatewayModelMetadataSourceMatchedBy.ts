import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Identifier strategy used to match the gateway catalog entry. Date-suffix and shared canonical-model fallback matches produce partial metadata.
 */
export type AiGatewayModelMetadataSourceMatchedBy =
  | typeof OVERRIDE
  | typeof WIRE_ID
  | typeof CANONICAL_ID
  | typeof WIRE_ID_DATE_SUFFIX
  | typeof CANONICAL_MODEL
  | UnparsedObject;
export const OVERRIDE = "override";
export const WIRE_ID = "wire_id";
export const CANONICAL_ID = "canonical_id";
export const WIRE_ID_DATE_SUFFIX = "wire_id_date_suffix";
export const CANONICAL_MODEL = "canonical_model";
