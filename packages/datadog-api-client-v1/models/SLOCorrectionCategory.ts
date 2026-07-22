/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Category the SLO correction belongs to.
*/

export type SLOCorrectionCategory = typeof SCHEDULED_MAINTENANCE| typeof OUTSIDE_BUSINESS_HOURS| typeof DEPLOYMENT| typeof OTHER | UnparsedObject;
export const SCHEDULED_MAINTENANCE = 'Scheduled Maintenance';
export const OUTSIDE_BUSINESS_HOURS = 'Outside Business Hours';
export const DEPLOYMENT = 'Deployment';
export const OTHER = 'Other';