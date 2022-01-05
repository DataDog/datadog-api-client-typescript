/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MonitorOverallStates } from './MonitorOverallStates';
import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* A single monitor group search result.
*/

export class MonitorGroupSearchResult {
    /**
    * The name of the group.
    */
    'group'?: string;
    /**
    * The list of tags of the monitor group.
    */
    'groupTags'?: Array<string>;
    /**
    * Latest timestamp the monitor group was in NO_DATA state.
    */
    'lastNodataTs'?: number;
    /**
    * Latest timestamp the monitor group triggered.
    */
    'lastTriggeredTs'?: number;
    /**
    * The ID of the monitor.
    */
    'monitorId'?: number;
    /**
    * The name of the monitor.
    */
    'monitorName'?: string;
    'status'?: MonitorOverallStates;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "group": {
            "baseName": "group",
            "type": "string",
            
            
        },
        "groupTags": {
            "baseName": "group_tags",
            "type": "Array<string>",
            
            
        },
        "lastNodataTs": {
            "baseName": "last_nodata_ts",
            "type": "number",
            
            "format": "int64",
        },
        "lastTriggeredTs": {
            "baseName": "last_triggered_ts",
            "type": "number",
            
            "format": "int64",
        },
        "monitorId": {
            "baseName": "monitor_id",
            "type": "number",
            
            "format": "int64",
        },
        "monitorName": {
            "baseName": "monitor_name",
            "type": "string",
            
            
        },
        "status": {
            "baseName": "status",
            "type": "MonitorOverallStates",
            
            
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return MonitorGroupSearchResult.attributeTypeMap;
    }

    public constructor() {
    }
}



