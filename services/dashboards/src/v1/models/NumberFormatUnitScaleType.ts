import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of unit scale.
 */
export type NumberFormatUnitScaleType = typeof CANONICAL_UNIT | UnparsedObject;
export const CANONICAL_UNIT = "canonical_unit";
