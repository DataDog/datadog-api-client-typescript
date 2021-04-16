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
import { ObjectSerializer } from './ObjectSerializer';

/**
* Search filters for listing security signals.
*/

export class SecurityMonitoringSignalListRequestFilter {
    /**
    * The minimum timestamp for requested security signals.
    */
    'from'?: Date;
    /**
    * Search query for listing security signals.
    */
    'query'?: string;
    /**
    * The maximum timestamp for requested security signals.
    */
    'to'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "from": {
            "baseName": "from",
            "type": "Date",
            "format": "date-time"
        },
        "query": {
            "baseName": "query",
            "type": "string",
            "format": ""
        },
        "to": {
            "baseName": "to",
            "type": "Date",
            "format": "date-time"
        }    };

    static getAttributeTypeMap() {
        return SecurityMonitoringSignalListRequestFilter.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): SecurityMonitoringSignalListRequestFilter {
      let res = new SecurityMonitoringSignalListRequestFilter();

      res.from = ObjectSerializer.deserialize(data.from, "Date", "date-time")

      res.query = ObjectSerializer.deserialize(data.query, "string", "")

      res.to = ObjectSerializer.deserialize(data.to, "Date", "date-time")


      return res;
    }

    static serialize(data: SecurityMonitoringSignalListRequestFilter): {[key: string]: any} {
        let attributeTypes = SecurityMonitoringSignalListRequestFilter.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.from = ObjectSerializer.serialize(data.from, "Date", "date-time")

        res.query = ObjectSerializer.serialize(data.query, "string", "")

        res.to = ObjectSerializer.serialize(data.to, "Date", "date-time")

        return res
    }
    
    public constructor() {
    }
}



