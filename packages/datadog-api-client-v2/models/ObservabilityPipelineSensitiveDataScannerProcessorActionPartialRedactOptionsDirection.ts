/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Indicates whether to redact characters from the first or last part of the matched value.
*/

export type ObservabilityPipelineSensitiveDataScannerProcessorActionPartialRedactOptionsDirection = typeof FIRST| typeof LAST | UnparsedObject;
export const FIRST = 'first';
export const LAST = 'last';