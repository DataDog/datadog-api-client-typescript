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
* Datadog API key.
*/

export class ApiKey {
    /**
    * Date of creation of the API key.
    */
    'created'?: string;
    /**
    * Datadog user handle that created the API key.
    */
    'createdBy'?: string;
    /**
    * API key.
    */
    'key'?: string;
    /**
    * Name of your API key.
    */
    'name'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "created": {
            "baseName": "created",
            "type": "string",
            "format": ""
        },
        "createdBy": {
            "baseName": "created_by",
            "type": "string",
            "format": ""
        },
        "key": {
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        "name": {
            "baseName": "name",
            "type": "string",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return ApiKey.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): ApiKey {
      let res = new ApiKey();

      res.created = ObjectSerializer.deserialize(data.created, "string", "")

      res.createdBy = ObjectSerializer.deserialize(data.created_by, "string", "")

      res.key = ObjectSerializer.deserialize(data.key, "string", "")

      res.name = ObjectSerializer.deserialize(data.name, "string", "")


      return res;
    }

    static serialize(data: ApiKey): {[key: string]: any} {
        let attributeTypes = ApiKey.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.created = ObjectSerializer.serialize(data.created, "string", "")

        res.created_by = ObjectSerializer.serialize(data.createdBy, "string", "")

        res.key = ObjectSerializer.serialize(data.key, "string", "")

        res.name = ObjectSerializer.serialize(data.name, "string", "")

        return res
    }
    
    public constructor() {
    }
}



