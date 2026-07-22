/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The strategy used to extract the dynamic value.
*/

export type RumSdkConfigDynamicOptionStrategy = typeof JS| typeof COOKIE| typeof DOM| typeof LOCAL_STORAGE | UnparsedObject;
export const JS = 'js';
export const COOKIE = 'cookie';
export const DOM = 'dom';
export const LOCAL_STORAGE = 'localStorage';