import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for variants.
 */
export type VariantDataType = typeof VARIANTS | UnparsedObject;
export const VARIANTS = "variants";
