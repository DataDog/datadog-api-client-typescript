/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * A data source that is powered by the Events Platform.
*/

export type EventsDataSource = typeof LOGS| typeof RUM| typeof DORA | UnparsedObject;
export const LOGS = 'logs';
export const RUM = 'rum';
export const DORA = 'dora';