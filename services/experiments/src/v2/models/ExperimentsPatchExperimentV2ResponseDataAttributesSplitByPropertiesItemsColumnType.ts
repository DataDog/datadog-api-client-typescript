import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the Datadog exposure field or Warehouse column.
 */
export type ExperimentsPatchExperimentV2ResponseDataAttributesSplitByPropertiesItemsColumnType =

    | typeof VARCHAR
    | typeof INT
    | typeof DOUBLE
    | typeof BOOLEAN_DATADOG
    | typeof VARCHAR_ARRAY
    | typeof INT_ARRAY
    | typeof DOUBLE_ARRAY
    | typeof RAW
    | typeof STRING
    | typeof INTEGER
    | typeof FLOAT
    | typeof BOOLEAN_WAREHOUSE
    | typeof DATE
    | typeof TIMESTAMP
    | UnparsedObject;
export const VARCHAR = "varchar";
export const INT = "int";
export const DOUBLE = "double";
export const BOOLEAN_DATADOG = "boolean";
export const VARCHAR_ARRAY = "varchar_array";
export const INT_ARRAY = "int_array";
export const DOUBLE_ARRAY = "double_array";
export const RAW = "raw";
export const STRING = "STRING";
export const INTEGER = "INTEGER";
export const FLOAT = "FLOAT";
export const BOOLEAN_WAREHOUSE = "BOOLEAN";
export const DATE = "DATE";
export const TIMESTAMP = "TIMESTAMP";
