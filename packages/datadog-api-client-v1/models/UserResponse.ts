/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { User } from './User';
import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* A Datadog User.
*/

export class UserResponse {
    'user'?: User;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "user": {
            "baseName": "user",
            "type": "User",
            
            
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return UserResponse.attributeTypeMap;
    }

    public constructor() {
    }
}



