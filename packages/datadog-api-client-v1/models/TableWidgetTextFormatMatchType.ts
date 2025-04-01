/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Match or compare option.
*/

export type TableWidgetTextFormatMatchType = typeof IS| typeof IS_NOT| typeof CONTAINS| typeof DOES_NOT_CONTAIN| typeof STARTS_WITH| typeof ENDS_WITH | UnparsedObject;
export const IS = 'is';
export const IS_NOT = 'is_not';
export const CONTAINS = 'contains';
export const DOES_NOT_CONTAIN = 'does_not_contain';
export const STARTS_WITH = 'starts_with';
export const ENDS_WITH = 'ends_with';