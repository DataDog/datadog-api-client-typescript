/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The primary color of the form theme.
*/

export type FormUiDefinitionUiThemePrimaryColor = typeof GRAY| typeof RED| typeof ORANGE| typeof YELLOW| typeof GREEN| typeof LIGHT_BLUE| typeof DARK_BLUE| typeof MAGENTA| typeof INDIGO | UnparsedObject;
export const GRAY = 'gray';
export const RED = 'red';
export const ORANGE = 'orange';
export const YELLOW = 'yellow';
export const GREEN = 'green';
export const LIGHT_BLUE = 'light-blue';
export const DARK_BLUE = 'dark-blue';
export const MAGENTA = 'magenta';
export const INDIGO = 'indigo';