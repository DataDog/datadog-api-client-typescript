/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Specific failure type within the insight category. For DNS insights: `timeout`, `nxdomain`,
 * `servfail`, or `general_failure`. For TLS certificate insights: `expired` or `expiring_soon`.
 * For security group insights: `denied`.
*/

export type NetworkHealthInsightFailureType = typeof TIMEOUT| typeof NXDOMAIN| typeof SERVFAIL| typeof GENERAL_FAILURE| typeof EXPIRED| typeof EXPIRING_SOON| typeof DENIED | UnparsedObject;
export const TIMEOUT = 'timeout';
export const NXDOMAIN = 'nxdomain';
export const SERVFAIL = 'servfail';
export const GENERAL_FAILURE = 'general_failure';
export const EXPIRED = 'expired';
export const EXPIRING_SOON = 'expiring_soon';
export const DENIED = 'denied';