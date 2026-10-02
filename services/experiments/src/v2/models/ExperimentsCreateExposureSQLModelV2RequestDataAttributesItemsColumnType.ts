import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Data type of a column in the SQL model.
 */
export type ExperimentsCreateExposureSQLModelV2RequestDataAttributesItemsColumnType =

    | typeof STRING
    | typeof INTEGER
    | typeof FLOAT
    | typeof BOOLEAN
    | typeof DATE
    | typeof TIMESTAMP
    | UnparsedObject;
export const STRING = "STRING";
export const INTEGER = "INTEGER";
export const FLOAT = "FLOAT";
export const BOOLEAN = "BOOLEAN";
export const DATE = "DATE";
export const TIMESTAMP = "TIMESTAMP";
