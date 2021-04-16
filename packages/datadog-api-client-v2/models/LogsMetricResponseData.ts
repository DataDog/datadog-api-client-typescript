/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsMetricResponseAttributes } from './LogsMetricResponseAttributes';
import { LogsMetricType } from './LogsMetricType';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* The log-based metric properties.
*/

export class LogsMetricResponseData {
    'attributes'?: LogsMetricResponseAttributes;
    /**
    * The name of the log-based metric.
    */
    'id'?: string;
    'type'?: LogsMetricType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "attributes": {
            "baseName": "attributes",
            "type": "LogsMetricResponseAttributes",
            "format": ""
        },
        "id": {
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        "type": {
            "baseName": "type",
            "type": "LogsMetricType",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return LogsMetricResponseData.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): LogsMetricResponseData {
      let res = new LogsMetricResponseData();

      res.attributes = ObjectSerializer.deserialize(data.attributes, "LogsMetricResponseAttributes", "")

      res.id = ObjectSerializer.deserialize(data.id, "string", "")

      if (['logs_metrics', undefined].includes(data.type)) {
          res.type = data.type;
      } else {
          throw TypeError(`invalid enum value ${ data.type } for type`);
      }


      return res;
    }

    static serialize(data: LogsMetricResponseData): {[key: string]: any} {
        let attributeTypes = LogsMetricResponseData.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.attributes = ObjectSerializer.serialize(data.attributes, "LogsMetricResponseAttributes", "")

        res.id = ObjectSerializer.serialize(data.id, "string", "")

        if (['logs_metrics', undefined].includes(data.type)) {
            res.type = data.type;
        } else {
            throw TypeError(`invalid enum value ${ data.type } for type`);
        }

        return res
    }
    
    public constructor() {
    }
}



