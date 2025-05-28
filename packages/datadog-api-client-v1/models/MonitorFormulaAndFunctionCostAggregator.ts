/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Aggregation methods for metric queries.
*/

export type MonitorFormulaAndFunctionCostAggregator = typeof AVG| typeof SUM| typeof MAX| typeof MIN| typeof LAST| typeof AREA| typeof L2NORM| typeof PERCENTILE| typeof STDDEV | UnparsedObject;
export const AVG = 'avg';
export const SUM = 'sum';
export const MAX = 'max';
export const MIN = 'min';
export const LAST = 'last';
export const AREA = 'area';
export const L2NORM = 'l2norm';
export const PERCENTILE = 'percentile';
export const STDDEV = 'stddev';