/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsAPITestResultShort } from './SyntheticsAPITestResultShort';
import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* Object with the latest Synthetic API test run.
*/

export class SyntheticsGetAPITestLatestResultsResponse {
    /**
    * Timestamp of the latest API test run.
    */
    'lastTimestampFetched'?: number;
    /**
    * Result of the latest API test run.
    */
    'results'?: Array<SyntheticsAPITestResultShort>;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "lastTimestampFetched": {
            "baseName": "last_timestamp_fetched",
            "type": "number",
            
            "format": "int64",
        },
        "results": {
            "baseName": "results",
            "type": "Array<SyntheticsAPITestResultShort>",
            
            
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return SyntheticsGetAPITestLatestResultsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}



