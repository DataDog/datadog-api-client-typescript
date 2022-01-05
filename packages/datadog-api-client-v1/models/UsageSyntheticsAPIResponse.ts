/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UsageSyntheticsAPIHour } from './UsageSyntheticsAPIHour';
import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* Response containing the number of Synthetics API tests run for each hour for a given organization.
*/

export class UsageSyntheticsAPIResponse {
    /**
    * Get hourly usage for Synthetics API tests.
    */
    'usage'?: Array<UsageSyntheticsAPIHour>;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "usage": {
            "baseName": "usage",
            "type": "Array<UsageSyntheticsAPIHour>",
            
            
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return UsageSyntheticsAPIResponse.attributeTypeMap;
    }

    public constructor() {
    }
}



