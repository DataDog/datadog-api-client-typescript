/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The output encoding format.
*/

export type ObservabilityPipelineSumoLogicDestinationEncoding = typeof JSON| typeof RAW_MESSAGE| typeof LOGFMT | UnparsedObject;
export const JSON = 'json';
export const RAW_MESSAGE = 'raw_message';
export const LOGFMT = 'logfmt';