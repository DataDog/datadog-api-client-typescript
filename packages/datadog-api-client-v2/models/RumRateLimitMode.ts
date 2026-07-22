/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The rate limit mode. `custom` enforces a fixed session limit, while
 * `adaptive` dynamically adjusts retention.
*/

export type RumRateLimitMode = typeof CUSTOM| typeof ADAPTIVE | UnparsedObject;
export const CUSTOM = 'custom';
export const ADAPTIVE = 'adaptive';