/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
