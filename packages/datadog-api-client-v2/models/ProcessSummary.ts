/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ProcessSummaryAttributes } from './ProcessSummaryAttributes';
import { ProcessSummaryType } from './ProcessSummaryType';
import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* Process summary object.
*/

export class ProcessSummary {
    'attributes'?: ProcessSummaryAttributes;
    /**
    * Process ID.
    */
    'id'?: string;
    'type'?: ProcessSummaryType;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "attributes": {
            "baseName": "attributes",
            "type": "ProcessSummaryAttributes",
            
            
        },
        "id": {
            "baseName": "id",
            "type": "string",
            
            
        },
        "type": {
            "baseName": "type",
            "type": "ProcessSummaryType",
            
            
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return ProcessSummary.attributeTypeMap;
    }

    public constructor() {
    }
}



