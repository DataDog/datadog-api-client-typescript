/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsByRetentionOrgUsage } from './LogsByRetentionOrgUsage';
import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* Indexed logs usage summary for each organization for each retention period with usage.
*/

export class LogsByRetentionOrgs {
    /**
    * Indexed logs usage summary for each organization.
    */
    'usage'?: Array<LogsByRetentionOrgUsage>;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "usage": {
            "baseName": "usage",
            "type": "Array<LogsByRetentionOrgUsage>",
            
            
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return LogsByRetentionOrgs.attributeTypeMap;
    }

    public constructor() {
    }
}



