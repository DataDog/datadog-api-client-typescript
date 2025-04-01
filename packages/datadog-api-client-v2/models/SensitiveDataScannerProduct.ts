/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Datadog product onto which Sensitive Data Scanner can be activated.
*/

export type SensitiveDataScannerProduct = typeof LOGS| typeof RUM| typeof EVENTS| typeof APM | UnparsedObject;
export const LOGS = 'logs';
export const RUM = 'rum';
export const EVENTS = 'events';
export const APM = 'apm';