/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ResponseMetaAttributes } from './ResponseMetaAttributes';
import { SecurityMonitoringRuleResponse } from './SecurityMonitoringRuleResponse';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* List of rules.
*/

export class SecurityMonitoringListRulesResponse {
    /**
    * TODO.
    */
    'data'?: Array<SecurityMonitoringRuleResponse>;
    'meta'?: ResponseMetaAttributes;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "data": {
            "baseName": "data",
            "type": "Array<SecurityMonitoringRuleResponse>",
            "format": ""
        },
        "meta": {
            "baseName": "meta",
            "type": "ResponseMetaAttributes",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return SecurityMonitoringListRulesResponse.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): SecurityMonitoringListRulesResponse {
      let res = new SecurityMonitoringListRulesResponse();

      res.data = ObjectSerializer.deserialize(data.data, "Array<SecurityMonitoringRuleResponse>", "")

      res.meta = ObjectSerializer.deserialize(data.meta, "ResponseMetaAttributes", "")


      return res;
    }

    static serialize(data: SecurityMonitoringListRulesResponse): {[key: string]: any} {
        let attributeTypes = SecurityMonitoringListRulesResponse.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.data = ObjectSerializer.serialize(data.data, "Array<SecurityMonitoringRuleResponse>", "")

        res.meta = ObjectSerializer.serialize(data.meta, "ResponseMetaAttributes", "")

        return res
    }
    
    public constructor() {
    }
}



