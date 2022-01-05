/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsGeoIPParserType } from './LogsGeoIPParserType';
import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* The GeoIP parser takes an IP address attribute and extracts if available the Continent, Country, Subdivision, and City information in the target attribute path.
*/

export class LogsGeoIPParser {
    /**
    * Whether or not the processor is enabled.
    */
    'isEnabled'?: boolean;
    /**
    * Name of the processor.
    */
    'name'?: string;
    /**
    * Array of source attributes.
    */
    'sources': Array<string>;
    /**
    * Name of the parent attribute that contains all the extracted details from the `sources`.
    */
    'target': string;
    'type': LogsGeoIPParserType;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "isEnabled": {
            "baseName": "is_enabled",
            "type": "boolean",
            
            
        },
        "name": {
            "baseName": "name",
            "type": "string",
            
            
        },
        "sources": {
            "baseName": "sources",
            "type": "Array<string>",
            "required": true,
            
        },
        "target": {
            "baseName": "target",
            "type": "string",
            "required": true,
            
        },
        "type": {
            "baseName": "type",
            "type": "LogsGeoIPParserType",
            "required": true,
            
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return LogsGeoIPParser.attributeTypeMap;
    }

    public constructor() {
    }
}



