/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Layout of the legend.
*/

export type TimeseriesWidgetLegendLayout = typeof AUTO| typeof HORIZONTAL| typeof VERTICAL | UnparsedObject;
export const AUTO = 'auto';
export const HORIZONTAL = 'horizontal';
export const VERTICAL = 'vertical';