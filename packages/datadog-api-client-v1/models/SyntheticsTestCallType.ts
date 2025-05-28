/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The type of gRPC call to perform.
*/

export type SyntheticsTestCallType = typeof HEALTHCHECK| typeof UNARY | UnparsedObject;
export const HEALTHCHECK = 'healthcheck';
export const UNARY = 'unary';