/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Timings scope for response time assertions.
*/

export type SyntheticsAssertionTimingsScope = typeof ALL| typeof WITHOUT_DNS | UnparsedObject;
export const ALL = 'all';
export const WITHOUT_DNS = 'withoutDNS';