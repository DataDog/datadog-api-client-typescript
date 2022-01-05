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
* Metadata about the response.
*/

export class MonitorSearchResponseMetadata {
    /**
    * The page to start paginating from.
    */
    'page'?: number;
    /**
    * The number of pages.
    */
    'pageCount'?: number;
    /**
    * The number of monitors to return per page.
    */
    'perPage'?: number;
    /**
    * The total number of monitors.
    */
    'totalCount'?: number;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "page": {
            "baseName": "page",
            "type": "number",
            
            "format": "int64",
        },
        "pageCount": {
            "baseName": "page_count",
            "type": "number",
            
            "format": "int64",
        },
        "perPage": {
            "baseName": "per_page",
            "type": "number",
            
            "format": "int64",
        },
        "totalCount": {
            "baseName": "total_count",
            "type": "number",
            
            "format": "int64",
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return MonitorSearchResponseMetadata.attributeTypeMap;
    }

    public constructor() {
    }
}



