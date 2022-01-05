/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SLOResponseData } from './SLOResponseData';
import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* A service level objective response containing a single service level objective.
*/

export class SLOResponse {
    'data'?: SLOResponseData;
    /**
    * An array of error messages. Each endpoint documents how/whether this field is used.
    */
    'errors'?: Array<string>;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "data": {
            "baseName": "data",
            "type": "SLOResponseData",
            
            
        },
        "errors": {
            "baseName": "errors",
            "type": "Array<string>",
            
            
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return SLOResponse.attributeTypeMap;
    }

    public constructor() {
    }
}



