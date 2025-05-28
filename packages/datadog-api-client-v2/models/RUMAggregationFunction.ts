/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * An aggregation function.
*/

export type RUMAggregationFunction = typeof COUNT| typeof CARDINALITY| typeof PERCENTILE_75| typeof PERCENTILE_90| typeof PERCENTILE_95| typeof PERCENTILE_98| typeof PERCENTILE_99| typeof SUM| typeof MIN| typeof MAX| typeof AVG| typeof MEDIAN | UnparsedObject;
export const COUNT = 'count';
export const CARDINALITY = 'cardinality';
export const PERCENTILE_75 = 'pc75';
export const PERCENTILE_90 = 'pc90';
export const PERCENTILE_95 = 'pc95';
export const PERCENTILE_98 = 'pc98';
export const PERCENTILE_99 = 'pc99';
export const SUM = 'sum';
export const MIN = 'min';
export const MAX = 'max';
export const AVG = 'avg';
export const MEDIAN = 'median';