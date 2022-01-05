/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UsageAttributionPagination } from './UsageAttributionPagination';
import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* The object containing document metadata.
*/

export class UsageTopAvgMetricsMetadata {
    /**
    * The day value from the user request that contains the returned usage data. (If day was used the request)
    */
    'day'?: Date;
    /**
    * The month value from the user request that contains the returned usage data. (If month was used the request)
    */
    'month'?: Date;
    'pagination'?: UsageAttributionPagination;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "day": {
            "baseName": "day",
            "type": "Date",
            
            "format": "date-time",
        },
        "month": {
            "baseName": "month",
            "type": "Date",
            
            "format": "date-time",
        },
        "pagination": {
            "baseName": "pagination",
            "type": "UsageAttributionPagination",
            
            
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return UsageTopAvgMetricsMetadata.attributeTypeMap;
    }

    public constructor() {
    }
}



