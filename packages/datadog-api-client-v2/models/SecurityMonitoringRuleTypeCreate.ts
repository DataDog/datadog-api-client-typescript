/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The rule type.
*/

export type SecurityMonitoringRuleTypeCreate = typeof APPLICATION_SECURITY| typeof LOG_DETECTION| typeof WORKLOAD_SECURITY | UnparsedObject;
export const APPLICATION_SECURITY = 'application_security';
export const LOG_DETECTION = 'log_detection';
export const WORKLOAD_SECURITY = 'workload_security';