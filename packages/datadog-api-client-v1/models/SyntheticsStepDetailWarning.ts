/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsWarningType } from './SyntheticsWarningType';
import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* Object collecting warnings for a given step.
*/

export class SyntheticsStepDetailWarning {
    /**
    * Message for the warning.
    */
    'message': string;
    'type': SyntheticsWarningType;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "message": {
            "baseName": "message",
            "type": "string",
            "required": true,
            
        },
        "type": {
            "baseName": "type",
            "type": "SyntheticsWarningType",
            "required": true,
            
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return SyntheticsStepDetailWarning.attributeTypeMap;
    }

    public constructor() {
    }
}



