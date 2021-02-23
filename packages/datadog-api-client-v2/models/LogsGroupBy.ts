/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsAggregateSort } from './LogsAggregateSort';
import { LogsGroupByHistogram } from './LogsGroupByHistogram';
import { LogsGroupByMissing } from './LogsGroupByMissing';
import { LogsGroupByTotal } from './LogsGroupByTotal';
import { HttpFile } from '../http/http';

/**
* A group by rule
*/
export class LogsGroupBy {
    /**
    * The name of the facet to use (required)
    */
    'facet': string;
    'histogram'?: LogsGroupByHistogram;
    /**
    * The maximum buckets to return for this group by
    */
    'limit'?: number;
    'missing'?: LogsGroupByMissing;
    'sort'?: LogsAggregateSort;
    'total'?: LogsGroupByTotal;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "facet",
            "baseName": "facet",
            "type": "string",
            "format": ""
        },
        {
            "name": "histogram",
            "baseName": "histogram",
            "type": "LogsGroupByHistogram",
            "format": ""
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "missing",
            "baseName": "missing",
            "type": "LogsGroupByMissing",
            "format": ""
        },
        {
            "name": "sort",
            "baseName": "sort",
            "type": "LogsAggregateSort",
            "format": ""
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "LogsGroupByTotal",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LogsGroupBy.attributeTypeMap;
    }
    
    public constructor() {
    }
}

