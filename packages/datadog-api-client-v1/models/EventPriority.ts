/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The priority of the event. For example, `normal` or `low`.
*/

export type EventPriority = typeof NORMAL| typeof LOW | UnparsedObject;
export const NORMAL = 'normal';
export const LOW = 'low';