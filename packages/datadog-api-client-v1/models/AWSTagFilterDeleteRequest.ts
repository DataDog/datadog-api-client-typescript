/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AWSNamespace } from './AWSNamespace';
import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* The objects used to delete an AWS tag filter entry.
*/

export class AWSTagFilterDeleteRequest {
    /**
    * The unique identifier of your AWS account.
    */
    'accountId'?: string;
    'namespace'?: AWSNamespace;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "accountId": {
            "baseName": "account_id",
            "type": "string",
            
            
        },
        "namespace": {
            "baseName": "namespace",
            "type": "AWSNamespace",
            
            
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return AWSTagFilterDeleteRequest.attributeTypeMap;
    }

    public constructor() {
    }
}



