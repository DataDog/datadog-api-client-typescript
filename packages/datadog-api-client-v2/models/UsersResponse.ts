/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ResponseMetaAttributes } from './ResponseMetaAttributes';
import { User } from './User';
import { UserResponseIncludedItem } from './UserResponseIncludedItem';
import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* Response containing information about multiple users.
*/

export class UsersResponse {
    /**
    * Array of returned users.
    */
    'data'?: Array<User>;
    /**
    * Array of objects related to the users.
    */
    'included'?: Array<UserResponseIncludedItem>;
    'meta'?: ResponseMetaAttributes;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "data": {
            "baseName": "data",
            "type": "Array<User>",
            
            
        },
        "included": {
            "baseName": "included",
            "type": "Array<UserResponseIncludedItem>",
            
            
        },
        "meta": {
            "baseName": "meta",
            "type": "ResponseMetaAttributes",
            
            
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return UsersResponse.attributeTypeMap;
    }

    public constructor() {
    }
}



