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
* The incident service's attributes for an update request.
*/

export class IncidentServiceUpdateAttributes {
    /**
    * Name of the incident service.
    */
    'name': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "name": {
            "baseName": "name",
            "type": "string",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return IncidentServiceUpdateAttributes.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): IncidentServiceUpdateAttributes {
      let res = new IncidentServiceUpdateAttributes();

      if (data.name === undefined) {
          throw new TypeError("missing required attribute 'name' on 'IncidentServiceUpdateAttributes' object");
      }
      res.name = ObjectSerializer.deserialize(data.name, "string", "")


      return res;
    }

    static serialize(data: IncidentServiceUpdateAttributes): {[key: string]: any} {
        let attributeTypes = IncidentServiceUpdateAttributes.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        if (data.name === undefined) {
            throw new TypeError("missing required attribute 'name' on 'IncidentServiceUpdateAttributes' object");
        }
        res.name = ObjectSerializer.serialize(data.name, "string", "")

        return res
    }
    
    public constructor() {
    }
}



