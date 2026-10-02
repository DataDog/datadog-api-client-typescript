import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Statistical method used to calculate this result.
 */
export type ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItemsMethod =

    | typeof FIXED_SAMPLE
    | typeof BAYESIAN
    | typeof SEQUENTIAL
    | typeof SEQUENTIAL_FIXED_HYBRID
    | typeof UNKNOWN
    | UnparsedObject;
export const FIXED_SAMPLE = "FIXED_SAMPLE";
export const BAYESIAN = "BAYESIAN";
export const SEQUENTIAL = "SEQUENTIAL";
export const SEQUENTIAL_FIXED_HYBRID = "SEQUENTIAL_FIXED_HYBRID";
export const UNKNOWN = "UNKNOWN";
