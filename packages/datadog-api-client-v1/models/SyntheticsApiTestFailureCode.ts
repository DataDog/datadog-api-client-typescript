/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Error code that can be returned by a Synthetic test.
*/

export type SyntheticsApiTestFailureCode = typeof BODY_TOO_LARGE| typeof DENIED| typeof TOO_MANY_REDIRECTS| typeof AUTHENTICATION_ERROR| typeof DECRYPTION| typeof INVALID_CHAR_IN_HEADER| typeof HEADER_TOO_LARGE| typeof HEADERS_INCOMPATIBLE_CONTENT_LENGTH| typeof INVALID_REQUEST| typeof REQUIRES_UPDATE| typeof UNESCAPED_CHARACTERS_IN_REQUEST_PATH| typeof MALFORMED_RESPONSE| typeof INCORRECT_ASSERTION| typeof CONNREFUSED| typeof CONNRESET| typeof DNS| typeof HOSTUNREACH| typeof NETUNREACH| typeof TIMEOUT| typeof SSL| typeof OCSP| typeof INVALID_TEST| typeof TUNNEL| typeof WEBSOCKET| typeof UNKNOWN| typeof INTERNAL_ERROR | UnparsedObject;
export const BODY_TOO_LARGE = 'BODY_TOO_LARGE';
export const DENIED = 'DENIED';
export const TOO_MANY_REDIRECTS = 'TOO_MANY_REDIRECTS';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const DECRYPTION = 'DECRYPTION';
export const INVALID_CHAR_IN_HEADER = 'INVALID_CHAR_IN_HEADER';
export const HEADER_TOO_LARGE = 'HEADER_TOO_LARGE';
export const HEADERS_INCOMPATIBLE_CONTENT_LENGTH = 'HEADERS_INCOMPATIBLE_CONTENT_LENGTH';
export const INVALID_REQUEST = 'INVALID_REQUEST';
export const REQUIRES_UPDATE = 'REQUIRES_UPDATE';
export const UNESCAPED_CHARACTERS_IN_REQUEST_PATH = 'UNESCAPED_CHARACTERS_IN_REQUEST_PATH';
export const MALFORMED_RESPONSE = 'MALFORMED_RESPONSE';
export const INCORRECT_ASSERTION = 'INCORRECT_ASSERTION';
export const CONNREFUSED = 'CONNREFUSED';
export const CONNRESET = 'CONNRESET';
export const DNS = 'DNS';
export const HOSTUNREACH = 'HOSTUNREACH';
export const NETUNREACH = 'NETUNREACH';
export const TIMEOUT = 'TIMEOUT';
export const SSL = 'SSL';
export const OCSP = 'OCSP';
export const INVALID_TEST = 'INVALID_TEST';
export const TUNNEL = 'TUNNEL';
export const WEBSOCKET = 'WEBSOCKET';
export const UNKNOWN = 'UNKNOWN';
export const INTERNAL_ERROR = 'INTERNAL_ERROR';