/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SLOListResponseMetadata } from './SLOListResponseMetadata';
import { ServiceLevelObjective } from './ServiceLevelObjective';
import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* A response with one or more service level objective.
*/

export class SLOListResponse {
    /**
    * An array of service level objective objects.
    */
    'data'?: Array<ServiceLevelObjective>;
    /**
    * An array of error messages. Each endpoint documents how/whether this field is used.
    */
    'errors'?: Array<string>;
    'metadata'?: SLOListResponseMetadata;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "data": {
            "baseName": "data",
            "type": "Array<ServiceLevelObjective>",
            
            
        },
        "errors": {
            "baseName": "errors",
            "type": "Array<string>",
            
            
        },
        "metadata": {
            "baseName": "metadata",
            "type": "SLOListResponseMetadata",
            
            
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return SLOListResponse.attributeTypeMap;
    }

    public constructor() {
    }
}



