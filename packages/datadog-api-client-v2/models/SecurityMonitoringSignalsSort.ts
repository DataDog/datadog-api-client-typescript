/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* The sort parameters used for querying security signals.
*/

export type SecurityMonitoringSignalsSort = typeof TIMESTAMP_ASCENDING | typeof TIMESTAMP_DESCENDING ;
export const TIMESTAMP_ASCENDING = 'timestamp';
export const TIMESTAMP_DESCENDING = '-timestamp';


