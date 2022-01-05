/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RoleAttributes } from './RoleAttributes';
import { RoleResponseRelationships } from './RoleResponseRelationships';
import { RolesType } from './RolesType';
import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* Role object returned by the API.
*/

export class Role {
    'attributes'?: RoleAttributes;
    /**
    * ID of the role.
    */
    'id'?: string;
    'relationships'?: RoleResponseRelationships;
    'type': RolesType;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "attributes": {
            "baseName": "attributes",
            "type": "RoleAttributes",
            
            
        },
        "id": {
            "baseName": "id",
            "type": "string",
            
            
        },
        "relationships": {
            "baseName": "relationships",
            "type": "RoleResponseRelationships",
            
            
        },
        "type": {
            "baseName": "type",
            "type": "RolesType",
            "required": true,
            
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return Role.attributeTypeMap;
    }

    public constructor() {
    }
}



