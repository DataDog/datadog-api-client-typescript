/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The comparator used to compare the SLI value to the threshold.
*/

export type SLOTimeSliceComparator = typeof GREATER| typeof GREATER_EQUAL| typeof LESS| typeof LESS_EQUAL | UnparsedObject;
export const GREATER = '>';
export const GREATER_EQUAL = '>=';
export const LESS = '<';
export const LESS_EQUAL = '<=';