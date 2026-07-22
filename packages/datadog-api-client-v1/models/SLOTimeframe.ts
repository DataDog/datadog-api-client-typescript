/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The SLO time window options. Note that "custom" is not a valid option for creating
 * or updating SLOs. It is only used when querying SLO history over custom timeframes.
*/

export type SLOTimeframe = typeof SEVEN_DAYS| typeof THIRTY_DAYS| typeof NINETY_DAYS| typeof CUSTOM | UnparsedObject;
export const SEVEN_DAYS = '7d';
export const THIRTY_DAYS = '30d';
export const NINETY_DAYS = '90d';
export const CUSTOM = 'custom';