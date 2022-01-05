/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PermissionAttributes } from './PermissionAttributes';
import { PermissionsType } from './PermissionsType';
import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* Permission object.
*/

export class Permission {
    'attributes'?: PermissionAttributes;
    /**
    * ID of the permission.
    */
    'id'?: string;
    'type': PermissionsType;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "attributes": {
            "baseName": "attributes",
            "type": "PermissionAttributes",
            
            
        },
        "id": {
            "baseName": "id",
            "type": "string",
            
            
        },
        "type": {
            "baseName": "type",
            "type": "PermissionsType",
            "required": true,
            
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return Permission.attributeTypeMap;
    }

    public constructor() {
    }
}



