/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Aggregator used for the request.
*/

export type ScatterplotWidgetAggregator = typeof AVERAGE| typeof LAST| typeof MAXIMUM| typeof MINIMUM| typeof SUM | UnparsedObject;
export const AVERAGE = 'avg';
export const LAST = 'last';
export const MAXIMUM = 'max';
export const MINIMUM = 'min';
export const SUM = 'sum';