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

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "MetricTagConfigurationUpdateAttributes",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "MetricTagConfigurationType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MetricTagConfigurationUpdateData.attributeTypeMap;
    }
    
    public constructor() {
    }
}

