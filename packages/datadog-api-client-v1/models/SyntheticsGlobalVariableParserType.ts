/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* Type of parser for a Synthetics global variable from a synthetics test.
*/

export type SyntheticsGlobalVariableParserType = typeof RAW | typeof JSON_PATH | typeof REGEX | typeof X_PATH ;
export const RAW = 'raw';
export const JSON_PATH = 'json_path';
export const REGEX = 'regex';
export const X_PATH = 'x_path';


