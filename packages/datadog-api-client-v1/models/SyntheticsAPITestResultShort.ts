/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsAPITestResultShortResult } from './SyntheticsAPITestResultShortResult';
import { SyntheticsTestMonitorStatus } from './SyntheticsTestMonitorStatus';
import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* Object with the results of a single Synthetic API test.
*/

export class SyntheticsAPITestResultShort {
    /**
    * Last time the API test was performed.
    */
    'checkTime'?: number;
    /**
    * Location from which the API test was performed.
    */
    'probeDc'?: string;
    'result'?: SyntheticsAPITestResultShortResult;
    /**
    * ID of the API test result.
    */
    'resultId'?: string;
    'status'?: SyntheticsTestMonitorStatus;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "checkTime": {
            "baseName": "check_time",
            "type": "number",
            
            "format": "double",
        },
        "probeDc": {
            "baseName": "probe_dc",
            "type": "string",
            
            
        },
        "result": {
            "baseName": "result",
            "type": "SyntheticsAPITestResultShortResult",
            
            
        },
        "resultId": {
            "baseName": "result_id",
            "type": "string",
            
            
        },
        "status": {
            "baseName": "status",
            "type": "SyntheticsTestMonitorStatus",
            
            
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return SyntheticsAPITestResultShort.attributeTypeMap;
    }

    public constructor() {
    }
}



