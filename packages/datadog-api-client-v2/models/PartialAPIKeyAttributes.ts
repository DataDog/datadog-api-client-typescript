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
* Attributes of a partial API key.
*/

export class PartialAPIKeyAttributes {
    /**
    * Creation date of the API key.
    */
    'createdAt'?: string;
    /**
    * The last four characters of the API key.
    */
    'last4'?: string;
    /**
    * Date the API key was last modified.
    */
    'modifiedAt'?: string;
    /**
    * Name of the API key.
    */
    'name'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "createdAt": {
            "baseName": "created_at",
            "type": "string",
            "format": ""
        },
        "last4": {
            "baseName": "last4",
            "type": "string",
            "format": ""
        },
        "modifiedAt": {
            "baseName": "modified_at",
            "type": "string",
            "format": ""
        },
        "name": {
            "baseName": "name",
            "type": "string",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return PartialAPIKeyAttributes.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): PartialAPIKeyAttributes {
      let res = new PartialAPIKeyAttributes();

      res.createdAt = ObjectSerializer.deserialize(data.created_at, "string", "")

      res.last4 = ObjectSerializer.deserialize(data.last4, "string", "")

      res.modifiedAt = ObjectSerializer.deserialize(data.modified_at, "string", "")

      res.name = ObjectSerializer.deserialize(data.name, "string", "")


      return res;
    }

    static serialize(data: PartialAPIKeyAttributes): {[key: string]: any} {
        let attributeTypes = PartialAPIKeyAttributes.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.created_at = ObjectSerializer.serialize(data.createdAt, "string", "")

        res.last4 = ObjectSerializer.serialize(data.last4, "string", "")

        res.modified_at = ObjectSerializer.serialize(data.modifiedAt, "string", "")

        res.name = ObjectSerializer.serialize(data.name, "string", "")

        return res
    }
    
    public constructor() {
    }
}



