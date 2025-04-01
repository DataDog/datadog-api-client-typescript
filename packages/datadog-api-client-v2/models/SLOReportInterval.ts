/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The frequency at which report data is to be generated.
*/

export type SLOReportInterval = typeof DAILY| typeof WEEKLY| typeof MONTHLY | UnparsedObject;
export const DAILY = 'daily';
export const WEEKLY = 'weekly';
export const MONTHLY = 'monthly';