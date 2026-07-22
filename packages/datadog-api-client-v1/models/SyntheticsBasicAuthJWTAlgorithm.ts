/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Algorithm to use for the JWT authentication.
*/

export type SyntheticsBasicAuthJWTAlgorithm = typeof HS256| typeof RS256| typeof ES256 | UnparsedObject;
export const HS256 = 'HS256';
export const RS256 = 'RS256';
export const ES256 = 'ES256';