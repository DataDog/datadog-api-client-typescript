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
* Object containing the ordered list of log index names.
*/

export class LogsIndexesOrder {
    /**
    * Array of strings identifying by their name(s) the index(es) of your organization. Logs are tested against the query filter of each index one by one, following the order of the array. Logs are eventually stored in the first matching index.
    */
    'indexNames': Array<string>;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "indexNames": {
            "baseName": "index_names",
            "type": "Array<string>",
            "required": true,
            
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return LogsIndexesOrder.attributeTypeMap;
    }

    public constructor() {
    }
}



