/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsMetricCompute } from './LogsMetricCompute';
import { LogsMetricFilter } from './LogsMetricFilter';
import { LogsMetricGroupBy } from './LogsMetricGroupBy';
import { HttpFile } from '../http/http';

/**
* The object describing the Datadog log-based metric to create.
*/
export class LogsMetricCreateAttributes {
    'compute': LogsMetricCompute;
    'filter'?: LogsMetricFilter;
    /**
    * The rules for the group by.
    */
    'groupBy'?: Array<LogsMetricGroupBy>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "compute",
            "baseName": "compute",
            "type": "LogsMetricCompute",
            "format": ""
        },
        {
            "name": "filter",
            "baseName": "filter",
            "type": "LogsMetricFilter",
            "format": ""
        },
        {
            "name": "groupBy",
            "baseName": "group_by",
            "type": "Array<LogsMetricGroupBy>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LogsMetricCreateAttributes.attributeTypeMap;
    }
    
    public constructor() {
    }
}

