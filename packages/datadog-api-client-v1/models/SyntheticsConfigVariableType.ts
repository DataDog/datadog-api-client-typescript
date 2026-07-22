/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Type of the configuration variable.
*/

export type SyntheticsConfigVariableType = typeof GLOBAL| typeof TEXT| typeof EMAIL | UnparsedObject;
export const GLOBAL = 'global';
export const TEXT = 'text';
export const EMAIL = 'email';