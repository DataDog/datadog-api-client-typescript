/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* The incident team's attributes from a response.
*/

export class IncidentTeamResponseAttributes {
    /**
    * Timestamp of when the incident team was created.
    */
    'created'?: Date;
    /**
    * Timestamp of when the incident team was modified.
    */
    'modified'?: Date;
    /**
    * Name of the incident team.
    */
    'name'?: string;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "created": {
            "baseName": "created",
            "type": "Date",
            
            "format": "date-time",
        },
        "modified": {
            "baseName": "modified",
            "type": "Date",
            
            "format": "date-time",
        },
        "name": {
            "baseName": "name",
            "type": "string",
            
            
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return IncidentTeamResponseAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}



