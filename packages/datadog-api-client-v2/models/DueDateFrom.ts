/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The reference point from which the due date is calculated. When `fix_available` is selected but not applicable to the finding type, `first_seen` is used instead.
*/

export type DueDateFrom = typeof FIRST_SEEN| typeof FIX_AVAILABLE | UnparsedObject;
export const FIRST_SEEN = 'first_seen';
export const FIX_AVAILABLE = 'fix_available';