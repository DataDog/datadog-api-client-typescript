/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The type of security issues on which the rule applies. Notification rules based on security signals need to use the trigger source "security_signals",
 * while notification rules based on security vulnerabilities need to use the trigger source "security_findings".
*/

export type TriggerSource = typeof SECURITY_FINDINGS| typeof SECURITY_SIGNALS | UnparsedObject;
export const SECURITY_FINDINGS = 'security_findings';
export const SECURITY_SIGNALS = 'security_signals';