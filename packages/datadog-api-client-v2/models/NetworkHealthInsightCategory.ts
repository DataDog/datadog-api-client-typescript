/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Category of network health insight. Indicates whether the insight relates to a DNS issue (`dns`),
 * a TCP issue (`tcp`), a TLS certificate issue (`tls-cert`), or a security group denial (`security-group`).
*/

export type NetworkHealthInsightCategory = typeof DNS| typeof TCP| typeof TLS_CERT| typeof SECURITY_GROUP | UnparsedObject;
export const DNS = 'dns';
export const TCP = 'tcp';
export const TLS_CERT = 'tls-cert';
export const SECURITY_GROUP = 'security-group';