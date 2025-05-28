/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Sort parameters when querying events.
*/

export type AuditLogsSort = typeof TIMESTAMP_ASCENDING| typeof TIMESTAMP_DESCENDING | UnparsedObject;
export const TIMESTAMP_ASCENDING = 'timestamp';
export const TIMESTAMP_DESCENDING = '-timestamp';