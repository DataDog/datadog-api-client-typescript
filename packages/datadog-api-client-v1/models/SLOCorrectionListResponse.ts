/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SLOCorrection } from './SLOCorrection';
import { HttpFile } from '../http/http';

/**
* A list of  SLO correction objects
*/
export class SLOCorrectionListResponse {
    /**
    * The list of of SLO corrections objects
    */
    'data'?: Array<SLOCorrection>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "Array<SLOCorrection>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SLOCorrectionListResponse.attributeTypeMap;
    }
    
    public constructor() {
    }
}

