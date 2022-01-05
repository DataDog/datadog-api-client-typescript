/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsGlobalVariable } from './SyntheticsGlobalVariable';
import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* Object containing an array of Synthetic global variables.
*/

export class SyntheticsListGlobalVariablesResponse {
    /**
    * Array of Synthetic global variables.
    */
    'variables'?: Array<SyntheticsGlobalVariable>;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "variables": {
            "baseName": "variables",
            "type": "Array<SyntheticsGlobalVariable>",
            
            
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return SyntheticsListGlobalVariablesResponse.attributeTypeMap;
    }

    public constructor() {
    }
}



