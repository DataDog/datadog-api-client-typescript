/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Name of the query for use in formulas.
*/

export type FormulaAndFunctionSLOQueryType = typeof METRIC| typeof MONITOR| typeof TIME_SLICE | UnparsedObject;
export const METRIC = 'metric';
export const MONITOR = 'monitor';
export const TIME_SLICE = 'time_slice';