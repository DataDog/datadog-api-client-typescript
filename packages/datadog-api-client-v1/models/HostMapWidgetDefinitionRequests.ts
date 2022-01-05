/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HostMapRequest } from './HostMapRequest';
import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* List of definitions.
*/

export class HostMapWidgetDefinitionRequests {
    'fill'?: HostMapRequest;
    'size'?: HostMapRequest;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "fill": {
            "baseName": "fill",
            "type": "HostMapRequest",
            
            
        },
        "size": {
            "baseName": "size",
            "type": "HostMapRequest",
            
            
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return HostMapWidgetDefinitionRequests.attributeTypeMap;
    }

    public constructor() {
    }
}



