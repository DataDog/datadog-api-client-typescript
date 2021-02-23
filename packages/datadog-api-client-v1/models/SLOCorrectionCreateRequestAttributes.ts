/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SLOCorrectionCategory } from './SLOCorrectionCategory';
import { HttpFile } from '../http/http';

/**
* The attribute object associated with the SLO correction to be created
*/
export class SLOCorrectionCreateRequestAttributes {
    'category': SLOCorrectionCategory;
    /**
    * Description of the correction being made.
    */
    'description'?: string;
    /**
    * Ending time of the correction in epoch seconds
    */
    'end': number;
    /**
    * ID of the SLO that this correction will be applied to
    */
    'sloId': string;
    /**
    * Starting time of the correction in epoch seconds
    */
    'start': number;
    /**
    * The timezone to display in the UI for the correction times (defaults to \"UTC\")
    */
    'timezone'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "category",
            "baseName": "category",
            "type": "SLOCorrectionCategory",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "end",
            "baseName": "end",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "sloId",
            "baseName": "slo_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "start",
            "baseName": "start",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "timezone",
            "baseName": "timezone",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SLOCorrectionCreateRequestAttributes.attributeTypeMap;
    }
    
    public constructor() {
    }
}

