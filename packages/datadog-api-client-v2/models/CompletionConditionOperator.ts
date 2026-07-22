/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The definition of `CompletionConditionOperator` object.
*/

export type CompletionConditionOperator = typeof OPERATOR_EQUAL| typeof OPERATOR_NOT_EQUAL| typeof OPERATOR_GREATER_THAN| typeof OPERATOR_LESS_THAN| typeof OPERATOR_GREATER_THAN_OR_EQUAL_TO| typeof OPERATOR_LESS_THAN_OR_EQUAL_TO| typeof OPERATOR_CONTAINS| typeof OPERATOR_DOES_NOT_CONTAIN| typeof OPERATOR_IS_NULL| typeof OPERATOR_IS_NOT_NULL| typeof OPERATOR_IS_EMPTY| typeof OPERATOR_IS_NOT_EMPTY | UnparsedObject;
export const OPERATOR_EQUAL = 'OPERATOR_EQUAL';
export const OPERATOR_NOT_EQUAL = 'OPERATOR_NOT_EQUAL';
export const OPERATOR_GREATER_THAN = 'OPERATOR_GREATER_THAN';
export const OPERATOR_LESS_THAN = 'OPERATOR_LESS_THAN';
export const OPERATOR_GREATER_THAN_OR_EQUAL_TO = 'OPERATOR_GREATER_THAN_OR_EQUAL_TO';
export const OPERATOR_LESS_THAN_OR_EQUAL_TO = 'OPERATOR_LESS_THAN_OR_EQUAL_TO';
export const OPERATOR_CONTAINS = 'OPERATOR_CONTAINS';
export const OPERATOR_DOES_NOT_CONTAIN = 'OPERATOR_DOES_NOT_CONTAIN';
export const OPERATOR_IS_NULL = 'OPERATOR_IS_NULL';
export const OPERATOR_IS_NOT_NULL = 'OPERATOR_IS_NOT_NULL';
export const OPERATOR_IS_EMPTY = 'OPERATOR_IS_EMPTY';
export const OPERATOR_IS_NOT_EMPTY = 'OPERATOR_IS_NOT_EMPTY';