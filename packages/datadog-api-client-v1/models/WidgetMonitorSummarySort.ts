/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Widget sorting methods.
*/

export type WidgetMonitorSummarySort = typeof NAME| typeof GROUP| typeof STATUS| typeof TAGS| typeof TRIGGERED| typeof GROUP_ASCENDING| typeof GROUP_DESCENDING| typeof NAME_ASCENDING| typeof NAME_DESCENDING| typeof STATUS_ASCENDING| typeof STATUS_DESCENDING| typeof TAGS_ASCENDING| typeof TAGS_DESCENDING| typeof TRIGGERED_ASCENDING| typeof TRIGGERED_DESCENDING| typeof PRIORITY_ASCENDING| typeof PRIORITY_DESCENDING | UnparsedObject;
export const NAME = 'name';
export const GROUP = 'group';
export const STATUS = 'status';
export const TAGS = 'tags';
export const TRIGGERED = 'triggered';
export const GROUP_ASCENDING = 'group,asc';
export const GROUP_DESCENDING = 'group,desc';
export const NAME_ASCENDING = 'name,asc';
export const NAME_DESCENDING = 'name,desc';
export const STATUS_ASCENDING = 'status,asc';
export const STATUS_DESCENDING = 'status,desc';
export const TAGS_ASCENDING = 'tags,asc';
export const TAGS_DESCENDING = 'tags,desc';
export const TRIGGERED_ASCENDING = 'triggered,asc';
export const TRIGGERED_DESCENDING = 'triggered,desc';
export const PRIORITY_ASCENDING = 'priority,asc';
export const PRIORITY_DESCENDING = 'priority,desc';