/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The definition of `InputSchemaParametersType` object.
*/

export type InputSchemaParametersType = typeof STRING| typeof NUMBER| typeof BOOLEAN| typeof OBJECT| typeof ARRAY_STRING| typeof ARRAY_NUMBER| typeof ARRAY_BOOLEAN| typeof ARRAY_OBJECT | UnparsedObject;
export const STRING = 'STRING';
export const NUMBER = 'NUMBER';
export const BOOLEAN = 'BOOLEAN';
export const OBJECT = 'OBJECT';
export const ARRAY_STRING = 'ARRAY_STRING';
export const ARRAY_NUMBER = 'ARRAY_NUMBER';
export const ARRAY_BOOLEAN = 'ARRAY_BOOLEAN';
export const ARRAY_OBJECT = 'ARRAY_OBJECT';