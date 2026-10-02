import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Comparison applied by the Datadog entry-point filter.
 */
export type ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPointFiltersItemsItemsOperation =

    | typeof EQ
    | typeof IN
    | typeof NEQ
    | typeof NOT_IN
    | typeof GTE
    | typeof LTE
    | typeof GT
    | typeof LT
    | UnparsedObject;
export const EQ = "eq";
export const IN = "in";
export const NEQ = "neq";
export const NOT_IN = "not_in";
export const GTE = "gte";
export const LTE = "lte";
export const GT = "gt";
export const LT = "lt";
