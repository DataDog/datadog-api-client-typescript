/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Specifies the level of urgency for a routing rule (low, high, or dynamic).
*/

export type Urgency = typeof LOW| typeof HIGH| typeof DYNAMIC | UnparsedObject;
export const LOW = 'low';
export const HIGH = 'high';
export const DYNAMIC = 'dynamic';