/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Define a display mode for the table cell.
*/

export type TableWidgetCellDisplayMode = typeof NUMBER| typeof BAR| typeof TREND | UnparsedObject;
export const NUMBER = 'number';
export const BAR = 'bar';
export const TREND = 'trend';