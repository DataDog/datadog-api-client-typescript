/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Reflow type for a **new dashboard layout** dashboard. Set this only when layout type is 'ordered'.
 * If set to 'fixed', the dashboard expects all widgets to have a layout, and if it's set to 'auto',
 * widgets should not have layouts.
*/

export type DashboardReflowType = typeof AUTO| typeof FIXED | UnparsedObject;
export const AUTO = 'auto';
export const FIXED = 'fixed';