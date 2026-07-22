/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The aggregation type.
*/

export type SecurityMonitoringRuleQueryAggregation = typeof COUNT| typeof CARDINALITY| typeof SUM| typeof MAX| typeof NEW_VALUE| typeof GEO_DATA| typeof EVENT_COUNT| typeof NONE | UnparsedObject;
export const COUNT = 'count';
export const CARDINALITY = 'cardinality';
export const SUM = 'sum';
export const MAX = 'max';
export const NEW_VALUE = 'new_value';
export const GEO_DATA = 'geo_data';
export const EVENT_COUNT = 'event_count';
export const NONE = 'none';