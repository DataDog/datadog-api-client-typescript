/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Type of display to use for the request.
*/

export type WidgetDisplayType = typeof AREA| typeof BARS| typeof LINE| typeof OVERLAY | UnparsedObject;
export const AREA = 'area';
export const BARS = 'bars';
export const LINE = 'line';
export const OVERLAY = 'overlay';