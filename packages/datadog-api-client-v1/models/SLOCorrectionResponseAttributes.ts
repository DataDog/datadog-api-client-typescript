/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Creator } from './Creator';
import { SLOCorrectionCategory } from './SLOCorrectionCategory';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* The attribute object associated with the SLO correction
*/

export class SLOCorrectionResponseAttributes {
    'category'?: SLOCorrectionCategory;
    'creator'?: Creator;
    /**
    * Description of the correction being made.
    */
    'description'?: string;
    /**
    * Ending time of the correction in epoch seconds
    */
    'end'?: number;
    /**
    * ID of the SLO that this correction will be applied to
    */
    'sloId'?: string;
    /**
    * Starting time of the correction in epoch seconds
    */
    'start'?: number;
    /**
    * The timezone to display in the UI for the correction times (defaults to \"UTC\")
    */
    'timezone'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "category": {
            "baseName": "category",
            "type": "SLOCorrectionCategory",
            "format": ""
        },
        "creator": {
            "baseName": "creator",
            "type": "Creator",
            "format": ""
        },
        "description": {
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        "end": {
            "baseName": "end",
            "type": "number",
            "format": "int64"
        },
        "sloId": {
            "baseName": "slo_id",
            "type": "string",
            "format": ""
        },
        "start": {
            "baseName": "start",
            "type": "number",
            "format": "int64"
        },
        "timezone": {
            "baseName": "timezone",
            "type": "string",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return SLOCorrectionResponseAttributes.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): SLOCorrectionResponseAttributes {
      let res = new SLOCorrectionResponseAttributes();

      if (['Scheduled Maintenance', 'Outside Business Hours', 'Deployment', 'Other', undefined].includes(data.category)) {
          res.category = data.category;
      } else {
          throw TypeError(`invalid enum value ${ data.category } for category`);
      }

      res.creator = ObjectSerializer.deserialize(data.creator, "Creator", "")

      res.description = ObjectSerializer.deserialize(data.description, "string", "")

      res.end = ObjectSerializer.deserialize(data.end, "number", "int64")

      res.sloId = ObjectSerializer.deserialize(data.slo_id, "string", "")

      res.start = ObjectSerializer.deserialize(data.start, "number", "int64")

      res.timezone = ObjectSerializer.deserialize(data.timezone, "string", "")


      return res;
    }

    static serialize(data: SLOCorrectionResponseAttributes): {[key: string]: any} {
        let attributeTypes = SLOCorrectionResponseAttributes.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        if (['Scheduled Maintenance', 'Outside Business Hours', 'Deployment', 'Other', undefined].includes(data.category)) {
            res.category = data.category;
        } else {
            throw TypeError(`invalid enum value ${ data.category } for category`);
        }

        res.creator = ObjectSerializer.serialize(data.creator, "Creator", "")

        res.description = ObjectSerializer.serialize(data.description, "string", "")

        res.end = ObjectSerializer.serialize(data.end, "number", "int64")

        res.slo_id = ObjectSerializer.serialize(data.sloId, "string", "")

        res.start = ObjectSerializer.serialize(data.start, "number", "int64")

        res.timezone = ObjectSerializer.serialize(data.timezone, "string", "")

        return res
    }
    
    public constructor() {
    }
}



