/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RoleCreateAttributes } from './RoleCreateAttributes';
import { RoleResponseRelationships } from './RoleResponseRelationships';
import { RolesType } from './RolesType';
import { HttpFile } from '../http/http';

/**
* Role object returned by the API.
*/
export class RoleCreateResponseData {
    'attributes'?: RoleCreateAttributes;
    /**
    * ID of the role.
    */
    'id'?: string;
    'relationships'?: RoleResponseRelationships;
    'type': RolesType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "RoleCreateAttributes",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "relationships",
            "baseName": "relationships",
            "type": "RoleResponseRelationships",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "RolesType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RoleCreateResponseData.attributeTypeMap;
    }
    
    public constructor() {
    }
}

