/**
 * Datadog API V1 Collection
 * Collection of all Datadog Public endpoints.
 *
 * OpenAPI spec version: 1.0
 * Contact: support@datadoghq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Creator } from './Creator';
import { SLOCorrectionCategory } from './SLOCorrectionCategory';
import { HttpFile } from '../http/http';

/**
* The attribute object associated with the SLO correction
*/
export class SLOCorrectionResponseAttributes {
    'category'?: SLOCorrectionCategory;
    'creator'?: Creator;
    /**
    * Description of the correction being made.
    */
    'description'?: string;
    /**
    * Ending time of the correction in epoch seconds
    */
    'end'?: number;
    /**
    * ID of the SLO that this correction will be applied to
    */
    'sloId'?: string;
    /**
    * Starting time of the correction in epoch seconds
    */
    'start'?: number;
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
            "name": "creator",
            "baseName": "creator",
            "type": "Creator",
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
        return SLOCorrectionResponseAttributes.attributeTypeMap;
    }
    
    public constructor() {
    }
}

