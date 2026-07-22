/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The feedback action to apply to an inference.
*/

export type OwnershipFeedbackAction = typeof CONFIRM| typeof REJECT| typeof CORRECT| typeof PERSIST | UnparsedObject;
export const CONFIRM = 'confirm';
export const REJECT = 'reject';
export const CORRECT = 'correct';
export const PERSIST = 'persist';