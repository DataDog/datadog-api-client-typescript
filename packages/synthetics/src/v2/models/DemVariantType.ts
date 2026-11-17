import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The type identifier for DEM journey variants.
 */
export type DemVariantType = typeof VARIANTS | UnparsedObject;
export const VARIANTS = "variants";
