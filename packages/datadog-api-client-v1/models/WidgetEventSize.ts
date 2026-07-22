/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Size to use to display an event.
*/

export type WidgetEventSize = typeof SMALL| typeof LARGE | UnparsedObject;
export const SMALL = 's';
export const LARGE = 'l';