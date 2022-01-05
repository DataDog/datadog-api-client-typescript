/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MetricTagConfigurationType } from './MetricTagConfigurationType';
import { MetricTagConfigurationUpdateAttributes } from './MetricTagConfigurationUpdateAttributes';
import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* Object for a single tag configuration to be edited.
*/

export class MetricTagConfigurationUpdateData {
    'attributes'?: MetricTagConfigurationUpdateAttributes;
    /**
    * The metric name for this resource.
    */
    'id': string;
    'type': MetricTagConfigurationType;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "attributes": {
            "baseName": "attributes",
            "type": "MetricTagConfigurationUpdateAttributes",
            
            
        },
        "id": {
            "baseName": "id",
            "type": "string",
            "required": true,
            
        },
        "type": {
            "baseName": "type",
            "type": "MetricTagConfigurationType",
            "required": true,
            
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return MetricTagConfigurationUpdateData.attributeTypeMap;
    }

    public constructor() {
    }
}



