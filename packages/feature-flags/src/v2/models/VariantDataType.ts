import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The resource type for variants.
 */
export type VariantDataType = typeof VARIANTS | UnparsedObject;
export const VARIANTS = "variants";
