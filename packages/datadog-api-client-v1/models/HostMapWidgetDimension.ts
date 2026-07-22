/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Visual dimension for the host map widget. Used both by infrastructure-backed formulas and by DDSQL projection columns; `group` is only meaningful for DDSQL projection columns, where repeated entries define the grouping hierarchy.
*/

export type HostMapWidgetDimension = typeof NODE| typeof FILL| typeof SIZE| typeof GROUP | UnparsedObject;
export const NODE = 'node';
export const FILL = 'fill';
export const SIZE = 'size';
export const GROUP = 'group';