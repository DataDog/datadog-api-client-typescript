/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * HTTP version to use for a Synthetic test.
*/

export type SyntheticsTestOptionsHTTPVersion = typeof HTTP1| typeof HTTP2| typeof ANY | UnparsedObject;
export const HTTP1 = 'http1';
export const HTTP2 = 'http2';
export const ANY = 'any';