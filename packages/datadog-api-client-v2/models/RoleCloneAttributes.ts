/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* Attributes required to create a new role by cloning an existing one.
*/

export class RoleCloneAttributes {
    /**
    * Name of the new role that is cloned.
    */
    'name': string;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "name": {
            "baseName": "name",
            "type": "string",
            "required": true,
            
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return RoleCloneAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}



