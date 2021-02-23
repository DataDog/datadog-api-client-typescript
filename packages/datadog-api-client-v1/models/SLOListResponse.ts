/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ServiceLevelObjective } from './ServiceLevelObjective';
import { HttpFile } from '../http/http';

/**
* A response with one or more service level objective.
*/
export class SLOListResponse {
    /**
    * An array of service level objective objects.
    */
    'data'?: Array<ServiceLevelObjective>;
    /**
    * An array of error messages. Each endpoint documents how/whether this field is used.
    */
    'errors'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<ServiceLevelObjective>",
            "format": ""
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SLOListResponse.attributeTypeMap;
    }
    
    public constructor() {
    }
}

