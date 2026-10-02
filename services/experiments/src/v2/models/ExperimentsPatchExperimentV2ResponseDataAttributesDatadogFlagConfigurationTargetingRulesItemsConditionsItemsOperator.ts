import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Required with attribute and value for an inline condition; omit when saved_filter_id is set.
 */
export type ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationTargetingRulesItemsConditionsItemsOperator =

    | typeof LT
    | typeof LTE
    | typeof GT
    | typeof GTE
    | typeof MATCHES
    | typeof NOT_MATCHES
    | typeof ONE_OF
    | typeof NOT_ONE_OF
    | typeof IS_NULL
    | typeof EQUALS
    | typeof SEMVER_EQ
    | typeof SEMVER_NEQ
    | typeof SEMVER_LT
    | typeof SEMVER_LTE
    | typeof SEMVER_GT
    | typeof SEMVER_GTE
    | UnparsedObject;
export const LT = "LT";
export const LTE = "LTE";
export const GT = "GT";
export const GTE = "GTE";
export const MATCHES = "MATCHES";
export const NOT_MATCHES = "NOT_MATCHES";
export const ONE_OF = "ONE_OF";
export const NOT_ONE_OF = "NOT_ONE_OF";
export const IS_NULL = "IS_NULL";
export const EQUALS = "EQUALS";
export const SEMVER_EQ = "SEMVER_EQ";
export const SEMVER_NEQ = "SEMVER_NEQ";
export const SEMVER_LT = "SEMVER_LT";
export const SEMVER_LTE = "SEMVER_LTE";
export const SEMVER_GT = "SEMVER_GT";
export const SEMVER_GTE = "SEMVER_GTE";
