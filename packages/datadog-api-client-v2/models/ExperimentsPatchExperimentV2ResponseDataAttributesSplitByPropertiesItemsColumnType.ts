/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
