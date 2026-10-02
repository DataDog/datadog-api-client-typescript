import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Reason that the statistical result is marked as unreliable.
 */
export type ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItemsUnreliableReason =

    | typeof CONTROL_DENOMINATOR_NEAR_ZERO
    | typeof TREATMENT_DENOMINATOR_NEAR_ZERO
    | typeof CONTROL_AND_TREATMENT_DENOMINATORS_NEAR_ZERO
    | typeof CONTROL_MEAN_NEAR_ZERO
    | typeof ZERO_VARIANCE
    | typeof UNKNOWN
    | UnparsedObject;
export const CONTROL_DENOMINATOR_NEAR_ZERO = "CONTROL_DENOMINATOR_NEAR_ZERO";
export const TREATMENT_DENOMINATOR_NEAR_ZERO =
  "TREATMENT_DENOMINATOR_NEAR_ZERO";
export const CONTROL_AND_TREATMENT_DENOMINATORS_NEAR_ZERO =
  "CONTROL_AND_TREATMENT_DENOMINATORS_NEAR_ZERO";
export const CONTROL_MEAN_NEAR_ZERO = "CONTROL_MEAN_NEAR_ZERO";
export const ZERO_VARIANCE = "ZERO_VARIANCE";
export const UNKNOWN = "UNKNOWN";
