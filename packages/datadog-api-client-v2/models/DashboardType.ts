/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The type of the dashboard.
*/

export type DashboardType = typeof CUSTOM_TIMEBOARD| typeof CUSTOM_SCREENBOARD| typeof INTEGRATION_SCREENBOARD| typeof INTEGRATION_TIMEBOARD| typeof HOST_TIMEBOARD | UnparsedObject;
export const CUSTOM_TIMEBOARD = 'custom_timeboard';
export const CUSTOM_SCREENBOARD = 'custom_screenboard';
export const INTEGRATION_SCREENBOARD = 'integration_screenboard';
export const INTEGRATION_TIMEBOARD = 'integration_timeboard';
export const HOST_TIMEBOARD = 'host_timeboard';