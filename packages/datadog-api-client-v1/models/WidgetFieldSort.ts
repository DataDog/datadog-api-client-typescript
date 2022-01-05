/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { WidgetSort } from './WidgetSort';
import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* Which column and order to sort by
*/

export class WidgetFieldSort {
    /**
    * Facet path for the column
    */
    'column': string;
    'order': WidgetSort;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "column": {
            "baseName": "column",
            "type": "string",
            "required": true,
            
        },
        "order": {
            "baseName": "order",
            "type": "WidgetSort",
            "required": true,
            
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return WidgetFieldSort.attributeTypeMap;
    }

    public constructor() {
    }
}



