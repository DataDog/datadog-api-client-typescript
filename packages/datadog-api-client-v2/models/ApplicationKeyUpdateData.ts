/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApplicationKeyUpdateAttributes } from './ApplicationKeyUpdateAttributes';
import { ApplicationKeysType } from './ApplicationKeysType';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* Object used to update an application key.
*/

export class ApplicationKeyUpdateData {
    'attributes': ApplicationKeyUpdateAttributes;
    /**
    * ID of the application key.
    */
    'id': string;
    'type': ApplicationKeysType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "attributes": {
            "baseName": "attributes",
            "type": "ApplicationKeyUpdateAttributes",
            "format": ""
        },
        "id": {
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        "type": {
            "baseName": "type",
            "type": "ApplicationKeysType",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return ApplicationKeyUpdateData.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): ApplicationKeyUpdateData {
      let res = new ApplicationKeyUpdateData();

      if (data.attributes === undefined) {
          throw new TypeError("missing required attribute 'attributes' on 'ApplicationKeyUpdateData' object");
      }
      res.attributes = ObjectSerializer.deserialize(data.attributes, "ApplicationKeyUpdateAttributes", "")

      if (data.id === undefined) {
          throw new TypeError("missing required attribute 'id' on 'ApplicationKeyUpdateData' object");
      }
      res.id = ObjectSerializer.deserialize(data.id, "string", "")

      if (data.type === undefined) {
          throw new TypeError("missing required attribute 'type' on 'ApplicationKeyUpdateData' object");
      }
      if (['application_keys', undefined].includes(data.type)) {
          res.type = data.type;
      } else {
          throw TypeError(`invalid enum value ${ data.type } for type`);
      }


      return res;
    }

    static serialize(data: ApplicationKeyUpdateData): {[key: string]: any} {
        let attributeTypes = ApplicationKeyUpdateData.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        if (data.attributes === undefined) {
            throw new TypeError("missing required attribute 'attributes' on 'ApplicationKeyUpdateData' object");
        }
        res.attributes = ObjectSerializer.serialize(data.attributes, "ApplicationKeyUpdateAttributes", "")

        if (data.id === undefined) {
            throw new TypeError("missing required attribute 'id' on 'ApplicationKeyUpdateData' object");
        }
        res.id = ObjectSerializer.serialize(data.id, "string", "")

        if (data.type === undefined) {
            throw new TypeError("missing required attribute 'type' on 'ApplicationKeyUpdateData' object");
        }
        if (['application_keys', undefined].includes(data.type)) {
            res.type = data.type;
        } else {
            throw TypeError(`invalid enum value ${ data.type } for type`);
        }

        return res
    }
    
    public constructor() {
    }
}



