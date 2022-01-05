/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsLocation } from './SyntheticsLocation';
import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* List of Synthetics locations.
*/

export class SyntheticsLocations {
    /**
    * List of Synthetics locations.
    */
    'locations'?: Array<SyntheticsLocation>;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "locations": {
            "baseName": "locations",
            "type": "Array<SyntheticsLocation>",
            
            
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return SyntheticsLocations.attributeTypeMap;
    }

    public constructor() {
    }
}



