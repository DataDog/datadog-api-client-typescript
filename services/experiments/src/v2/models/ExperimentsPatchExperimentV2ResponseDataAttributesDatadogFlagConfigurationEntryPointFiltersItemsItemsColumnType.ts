import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Data type of the column evaluated by the entry-point filter.
 */
export type ExperimentsPatchExperimentV2ResponseDataAttributesDatadogFlagConfigurationEntryPointFiltersItemsItemsColumnType =

    | typeof VARCHAR
    | typeof INT
    | typeof DOUBLE
    | typeof BOOLEAN
    | typeof VARCHAR_ARRAY
    | typeof INT_ARRAY
    | typeof DOUBLE_ARRAY
    | typeof RAW
    | UnparsedObject;
export const VARCHAR = "varchar";
export const INT = "int";
export const DOUBLE = "double";
export const BOOLEAN = "boolean";
export const VARCHAR_ARRAY = "varchar_array";
export const INT_ARRAY = "int_array";
export const DOUBLE_ARRAY = "double_array";
export const RAW = "raw";
