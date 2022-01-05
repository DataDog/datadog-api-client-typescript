/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsTriggerCITestLocation } from './SyntheticsTriggerCITestLocation';
import { SyntheticsTriggerCITestRunResult } from './SyntheticsTriggerCITestRunResult';
import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* Object containing information about the tests triggered.
*/

export class SyntheticsTriggerCITestsResponse {
    /**
    * The public ID of the batch triggered.
    */
    'batchId'?: string;
    /**
    * List of Synthetics locations.
    */
    'locations'?: Array<SyntheticsTriggerCITestLocation>;
    /**
    * Information about the tests runs.
    */
    'results'?: Array<SyntheticsTriggerCITestRunResult>;
    /**
    * The public IDs of the Synthetics test triggered.
    */
    'triggeredCheckIds'?: Array<string>;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "batchId": {
            "baseName": "batch_id",
            "type": "string",
            
            
        },
        "locations": {
            "baseName": "locations",
            "type": "Array<SyntheticsTriggerCITestLocation>",
            
            
        },
        "results": {
            "baseName": "results",
            "type": "Array<SyntheticsTriggerCITestRunResult>",
            
            
        },
        "triggeredCheckIds": {
            "baseName": "triggered_check_ids",
            "type": "Array<string>",
            
            
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return SyntheticsTriggerCITestsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}



