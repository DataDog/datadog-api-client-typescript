/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MonitorSearchResponseCounts } from './MonitorSearchResponseCounts';
import { MonitorSearchResponseMetadata } from './MonitorSearchResponseMetadata';
import { MonitorSearchResult } from './MonitorSearchResult';
import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* The response form a monitor search.
*/

export class MonitorSearchResponse {
    'counts'?: MonitorSearchResponseCounts;
    'metadata'?: MonitorSearchResponseMetadata;
    /**
    * The list of found monitors.
    */
    'monitors'?: Array<MonitorSearchResult>;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "counts": {
            "baseName": "counts",
            "type": "MonitorSearchResponseCounts",
            
            
        },
        "metadata": {
            "baseName": "metadata",
            "type": "MonitorSearchResponseMetadata",
            
            
        },
        "monitors": {
            "baseName": "monitors",
            "type": "Array<MonitorSearchResult>",
            
            
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return MonitorSearchResponse.attributeTypeMap;
    }

    public constructor() {
    }
}



