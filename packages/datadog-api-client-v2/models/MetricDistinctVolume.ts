/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MetricDistinctVolumeAttributes } from './MetricDistinctVolumeAttributes';
import { MetricDistinctVolumeType } from './MetricDistinctVolumeType';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* Object for a single metric's distinct volume.
*/

export class MetricDistinctVolume {
    'attributes'?: MetricDistinctVolumeAttributes;
    /**
    * The metric name for this resource.
    */
    'id'?: string;
    'type'?: MetricDistinctVolumeType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "attributes": {
            "baseName": "attributes",
            "type": "MetricDistinctVolumeAttributes",
            "format": ""
        },
        "id": {
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        "type": {
            "baseName": "type",
            "type": "MetricDistinctVolumeType",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return MetricDistinctVolume.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): MetricDistinctVolume {
      let res = new MetricDistinctVolume();

      res.attributes = ObjectSerializer.deserialize(data.attributes, "MetricDistinctVolumeAttributes", "")

      res.id = ObjectSerializer.deserialize(data.id, "string", "")

      if (['distinct_metric_volumes', undefined].includes(data.type)) {
          res.type = data.type;
      } else {
          throw TypeError(`invalid enum value ${ data.type } for type`);
      }


      return res;
    }

    static serialize(data: MetricDistinctVolume): {[key: string]: any} {
        let attributeTypes = MetricDistinctVolume.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.attributes = ObjectSerializer.serialize(data.attributes, "MetricDistinctVolumeAttributes", "")

        res.id = ObjectSerializer.serialize(data.id, "string", "")

        if (['distinct_metric_volumes', undefined].includes(data.type)) {
            res.type = data.type;
        } else {
            throw TypeError(`invalid enum value ${ data.type } for type`);
        }

        return res
    }
    
    public constructor() {
    }
}



