/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { APIKeyRelationships } from './APIKeyRelationships';
import { APIKeysType } from './APIKeysType';
import { FullAPIKeyAttributes } from './FullAPIKeyAttributes';
import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* Datadog API key.
*/

export class FullAPIKey {
    'attributes'?: FullAPIKeyAttributes;
    /**
    * ID of the API key.
    */
    'id'?: string;
    'relationships'?: APIKeyRelationships;
    'type'?: APIKeysType;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "attributes": {
            "baseName": "attributes",
            "type": "FullAPIKeyAttributes",
            
            
        },
        "id": {
            "baseName": "id",
            "type": "string",
            
            
        },
        "relationships": {
            "baseName": "relationships",
            "type": "APIKeyRelationships",
            
            
        },
        "type": {
            "baseName": "type",
            "type": "APIKeysType",
            
            
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return FullAPIKey.attributeTypeMap;
    }

    public constructor() {
    }
}



