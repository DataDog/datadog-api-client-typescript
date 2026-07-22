/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Navigate between different tabs for your browser test.
*/

export type SyntheticsPlayingTab = typeof MAIN_TAB| typeof NEW_TAB| typeof TAB_1| typeof TAB_2| typeof TAB_3 | UnparsedObject;
export const MAIN_TAB = -1;
export const NEW_TAB = 0;
export const TAB_1 = 1;
export const TAB_2 = 2;
export const TAB_3 = 3;