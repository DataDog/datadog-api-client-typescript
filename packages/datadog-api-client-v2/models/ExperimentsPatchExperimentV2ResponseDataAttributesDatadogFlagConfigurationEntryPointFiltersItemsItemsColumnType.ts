/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
