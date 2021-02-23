/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SLOHistoryMetrics } from './SLOHistoryMetrics';
import { SLOHistorySLIData } from './SLOHistorySLIData';
import { SLOThreshold } from './SLOThreshold';
import { SLOType } from './SLOType';
import { SLOTypeNumeric } from './SLOTypeNumeric';
import { HttpFile } from '../http/http';

/**
* An array of service level objective objects.
*/
export class SLOHistoryResponseData {
    /**
    * The `from` timestamp in epoch seconds.
    */
    'fromTs'?: number;
    'groups'?: SLOHistorySLIData;
    'overall'?: SLOHistorySLIData;
    'series'?: SLOHistoryMetrics;
    /**
    * mapping of string timeframe to the SLO threshold.
    */
    'thresholds'?: { [key: string]: SLOThreshold; };
    /**
    * The `to` timestamp in epoch seconds.
    */
    'toTs'?: number;
    'type'?: SLOType;
    'typeId'?: SLOTypeNumeric;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "fromTs",
            "baseName": "from_ts",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "groups",
            "baseName": "groups",
            "type": "SLOHistorySLIData",
            "format": ""
        },
        {
            "name": "overall",
            "baseName": "overall",
            "type": "SLOHistorySLIData",
            "format": ""
        },
        {
            "name": "series",
            "baseName": "series",
            "type": "SLOHistoryMetrics",
            "format": ""
        },
        {
            "name": "thresholds",
            "baseName": "thresholds",
            "type": "{ [key: string]: SLOThreshold; }",
            "format": ""
        },
        {
            "name": "toTs",
            "baseName": "to_ts",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "SLOType",
            "format": ""
        },
        {
            "name": "typeId",
            "baseName": "type_id",
            "type": "SLOTypeNumeric",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SLOHistoryResponseData.attributeTypeMap;
    }
    
    public constructor() {
    }
}

