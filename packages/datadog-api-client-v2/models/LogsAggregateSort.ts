/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsAggregateSortType } from './LogsAggregateSortType';
import { LogsAggregationFunction } from './LogsAggregationFunction';
import { LogsSortOrder } from './LogsSortOrder';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* A sort rule
*/

export class LogsAggregateSort {
    'aggregation'?: LogsAggregationFunction;
    /**
    * The metric to sort by (only used for `type=measure`)
    */
    'metric'?: string;
    'order'?: LogsSortOrder;
    'type'?: LogsAggregateSortType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "aggregation": {
            "baseName": "aggregation",
            "type": "LogsAggregationFunction",
            "format": ""
        },
        "metric": {
            "baseName": "metric",
            "type": "string",
            "format": ""
        },
        "order": {
            "baseName": "order",
            "type": "LogsSortOrder",
            "format": ""
        },
        "type": {
            "baseName": "type",
            "type": "LogsAggregateSortType",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return LogsAggregateSort.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): LogsAggregateSort {
      let res = new LogsAggregateSort();

      if (['count', 'cardinality', 'pc75', 'pc90', 'pc95', 'pc98', 'pc99', 'sum', 'min', 'max', 'avg', undefined].includes(data.aggregation)) {
          res.aggregation = data.aggregation;
      } else {
          throw TypeError(`invalid enum value ${ data.aggregation } for aggregation`);
      }

      res.metric = ObjectSerializer.deserialize(data.metric, "string", "")

      if (['asc', 'desc', undefined].includes(data.order)) {
          res.order = data.order;
      } else {
          throw TypeError(`invalid enum value ${ data.order } for order`);
      }

      if (['alphabetical', 'measure', undefined].includes(data.type)) {
          res.type = data.type;
      } else {
          throw TypeError(`invalid enum value ${ data.type } for type`);
      }


      return res;
    }

    static serialize(data: LogsAggregateSort): {[key: string]: any} {
        let attributeTypes = LogsAggregateSort.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        if (['count', 'cardinality', 'pc75', 'pc90', 'pc95', 'pc98', 'pc99', 'sum', 'min', 'max', 'avg', undefined].includes(data.aggregation)) {
            res.aggregation = data.aggregation;
        } else {
            throw TypeError(`invalid enum value ${ data.aggregation } for aggregation`);
        }

        res.metric = ObjectSerializer.serialize(data.metric, "string", "")

        if (['asc', 'desc', undefined].includes(data.order)) {
            res.order = data.order;
        } else {
            throw TypeError(`invalid enum value ${ data.order } for order`);
        }

        if (['alphabetical', 'measure', undefined].includes(data.type)) {
            res.type = data.type;
        } else {
            throw TypeError(`invalid enum value ${ data.type } for type`);
        }

        return res
    }
    
    public constructor() {
    }
}



