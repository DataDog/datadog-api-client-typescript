/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The field to sort by.
*/

export type UsageSort = typeof COMPUTED_ON| typeof SIZE| typeof START_DATE| typeof END_DATE | UnparsedObject;
export const COMPUTED_ON = 'computed_on';
export const SIZE = 'size';
export const START_DATE = 'start_date';
export const END_DATE = 'end_date';