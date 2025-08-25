/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The original representation of input string.
*/

export type LogsDecoderProcessorInputRepresentation = typeof UTF_8| typeof INTEGER | UnparsedObject;
export const UTF_8 = 'utf_8';
export const INTEGER = 'integer';