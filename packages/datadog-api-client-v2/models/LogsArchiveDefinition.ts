/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsArchiveAttributes } from './LogsArchiveAttributes';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* The definition of an archive.
*/

export class LogsArchiveDefinition {
    'attributes'?: LogsArchiveAttributes;
    /**
    * The archive ID.
    */
    'id'?: string;
    /**
    * The type of the resource. The value should always be archives.
    */
    'type': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "attributes": {
            "baseName": "attributes",
            "type": "LogsArchiveAttributes",
            "format": ""
        },
        "id": {
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        "type": {
            "baseName": "type",
            "type": "string",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return LogsArchiveDefinition.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): LogsArchiveDefinition {
      let res = new LogsArchiveDefinition();

      res.attributes = ObjectSerializer.deserialize(data.attributes, "LogsArchiveAttributes", "")

      res.id = ObjectSerializer.deserialize(data.id, "string", "")

      if (data.type === undefined) {
          throw new TypeError("missing required attribute 'type' on 'LogsArchiveDefinition' object");
      }
      res.type = ObjectSerializer.deserialize(data.type, "string", "")


      return res;
    }

    static serialize(data: LogsArchiveDefinition): {[key: string]: any} {
        let attributeTypes = LogsArchiveDefinition.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.attributes = ObjectSerializer.serialize(data.attributes, "LogsArchiveAttributes", "")

        res.id = ObjectSerializer.serialize(data.id, "string", "")

        if (data.type === undefined) {
            throw new TypeError("missing required attribute 'type' on 'LogsArchiveDefinition' object");
        }
        res.type = ObjectSerializer.serialize(data.type, "string", "")

        return res
    }
    
    public constructor() {
    }
}



