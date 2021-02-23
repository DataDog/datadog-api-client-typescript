/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsExclusion } from './LogsExclusion';
import { LogsFilter } from './LogsFilter';
import { HttpFile } from '../http/http';

/**
* Object for updating a Datadog Log index.
*/
export class LogsIndexUpdateRequest {
    /**
    * The number of log events you can send in this index per day before you are rate-limited.
    */
    'dailyLimit'?: number;
    /**
    * If true, sets the `daily_limit` value to null and the index is not limited on a daily basis (any specified `daily_limit` value in the request is ignored). If false or omitted, the index's current `daily_limit` is maintained.
    */
    'disableDailyLimit'?: boolean;
    /**
    * An array of exclusion objects. The logs are tested against the query of each filter, following the order of the array. Only the first matching active exclusion matters, others (if any) are ignored.
    */
    'exclusionFilters'?: Array<LogsExclusion>;
    'filter': LogsFilter;
    /**
    * The number of days before logs are deleted from this index. Available values depend on retention plans specified in your organization's contract/subscriptions.  **Note:** Changing the retention for an index adjusts the length of retention for all logs already in this index. It may also affect billing.
    */
    'numRetentionDays'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "dailyLimit",
            "baseName": "daily_limit",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "disableDailyLimit",
            "baseName": "disable_daily_limit",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "exclusionFilters",
            "baseName": "exclusion_filters",
            "type": "Array<LogsExclusion>",
            "format": ""
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "LogsFilter",
            "format": ""
        },
        {
            "name": "numRetentionDays",
            "baseName": "num_retention_days",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return LogsIndexUpdateRequest.attributeTypeMap;
    }
    
    public constructor() {
    }
}

