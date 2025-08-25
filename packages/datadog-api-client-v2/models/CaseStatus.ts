/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Case status
*/

export type CaseStatus = typeof OPEN| typeof IN_PROGRESS| typeof CLOSED | UnparsedObject;
export const OPEN = 'OPEN';
export const IN_PROGRESS = 'IN_PROGRESS';
export const CLOSED = 'CLOSED';