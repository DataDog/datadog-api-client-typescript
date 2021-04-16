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
* The log-based metric filter. Logs matching this filter will be aggregated in this metric.
*/

export class LogsMetricResponseFilter {
    /**
    * The search query - following the log search syntax.
    */
    'query'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "query": {
            "baseName": "query",
            "type": "string",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return LogsMetricResponseFilter.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): LogsMetricResponseFilter {
      let res = new LogsMetricResponseFilter();

      res.query = ObjectSerializer.deserialize(data.query, "string", "")


      return res;
    }

    static serialize(data: LogsMetricResponseFilter): {[key: string]: any} {
        let attributeTypes = LogsMetricResponseFilter.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.query = ObjectSerializer.serialize(data.query, "string", "")

        return res
    }
    
    public constructor() {
    }
}



