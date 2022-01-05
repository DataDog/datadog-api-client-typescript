/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UsageSNMPHour } from './UsageSNMPHour';
import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* Response containing the number of SNMP devices for each hour for a given organization.
*/

export class UsageSNMPResponse {
    /**
    * Get hourly usage for SNMP devices.
    */
    'usage'?: Array<UsageSNMPHour>;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "usage": {
            "baseName": "usage",
            "type": "Array<UsageSNMPHour>",
            
            
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return UsageSNMPResponse.attributeTypeMap;
    }

    public constructor() {
    }
}



