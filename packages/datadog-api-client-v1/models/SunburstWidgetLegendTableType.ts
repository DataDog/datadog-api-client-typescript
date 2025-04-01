/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Whether or not to show a table legend.
*/

export type SunburstWidgetLegendTableType = typeof TABLE| typeof NONE | UnparsedObject;
export const TABLE = 'table';
export const NONE = 'none';