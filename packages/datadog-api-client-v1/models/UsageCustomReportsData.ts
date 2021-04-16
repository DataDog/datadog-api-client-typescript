/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UsageCustomReportsAttributes } from './UsageCustomReportsAttributes';
import { UsageReportsType } from './UsageReportsType';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* The response containing the date and type for custom reports.
*/

export class UsageCustomReportsData {
    'attributes'?: UsageCustomReportsAttributes;
    /**
    * The date for specified custom reports.
    */
    'id'?: string;
    'type'?: UsageReportsType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "attributes": {
            "baseName": "attributes",
            "type": "UsageCustomReportsAttributes",
            "format": ""
        },
        "id": {
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        "type": {
            "baseName": "type",
            "type": "UsageReportsType",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return UsageCustomReportsData.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): UsageCustomReportsData {
      let res = new UsageCustomReportsData();

      res.attributes = ObjectSerializer.deserialize(data.attributes, "UsageCustomReportsAttributes", "")

      res.id = ObjectSerializer.deserialize(data.id, "string", "")

      if (['reports', undefined].includes(data.type)) {
          res.type = data.type;
      } else {
          throw TypeError(`invalid enum value ${ data.type } for type`);
      }


      return res;
    }

    static serialize(data: UsageCustomReportsData): {[key: string]: any} {
        let attributeTypes = UsageCustomReportsData.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.attributes = ObjectSerializer.serialize(data.attributes, "UsageCustomReportsAttributes", "")

        res.id = ObjectSerializer.serialize(data.id, "string", "")

        if (['reports', undefined].includes(data.type)) {
            res.type = data.type;
        } else {
            throw TypeError(`invalid enum value ${ data.type } for type`);
        }

        return res
    }
    
    public constructor() {
    }
}



