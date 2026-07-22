/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The current status of the downtime.
*/

export type DowntimeStatus = typeof ACTIVE| typeof CANCELED| typeof ENDED| typeof SCHEDULED | UnparsedObject;
export const ACTIVE = 'active';
export const CANCELED = 'canceled';
export const ENDED = 'ended';
export const SCHEDULED = 'scheduled';