import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Whether the reported lift is relative or absolute.
 */
export type ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItemsLiftType =
  typeof RELATIVE | typeof ABSOLUTE | typeof UNKNOWN | UnparsedObject;
export const RELATIVE = "RELATIVE";
export const ABSOLUTE = "ABSOLUTE";
export const UNKNOWN = "UNKNOWN";
