/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DashboardLayoutType } from './DashboardLayoutType';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* Dashboard definition.
*/

export class DashboardSummaryDefinition {
    /**
    * Identifier of the dashboard author.
    */
    'authorHandle'?: string;
    /**
    * Creation date of the dashboard.
    */
    'createdAt'?: Date;
    /**
    * Description of the dashboard.
    */
    'description'?: string;
    /**
    * Dashboard identifier.
    */
    'id'?: string;
    /**
    * Whether this dashboard is read-only. If True, only the author and admins can make changes to it.
    */
    'isReadOnly'?: boolean;
    'layoutType'?: DashboardLayoutType;
    /**
    * Modification date of the dashboard.
    */
    'modifiedAt'?: Date;
    /**
    * Title of the dashboard.
    */
    'title'?: string;
    /**
    * URL of the dashboard.
    */
    'url'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "authorHandle": {
            "baseName": "author_handle",
            "type": "string",
            "format": ""
        },
        "createdAt": {
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        "description": {
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        "id": {
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        "isReadOnly": {
            "baseName": "is_read_only",
            "type": "boolean",
            "format": ""
        },
        "layoutType": {
            "baseName": "layout_type",
            "type": "DashboardLayoutType",
            "format": ""
        },
        "modifiedAt": {
            "baseName": "modified_at",
            "type": "Date",
            "format": "date-time"
        },
        "title": {
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        "url": {
            "baseName": "url",
            "type": "string",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return DashboardSummaryDefinition.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): DashboardSummaryDefinition {
      let res = new DashboardSummaryDefinition();

      res.authorHandle = ObjectSerializer.deserialize(data.author_handle, "string", "")

      res.createdAt = ObjectSerializer.deserialize(data.created_at, "Date", "date-time")

      res.description = ObjectSerializer.deserialize(data.description, "string", "")

      res.id = ObjectSerializer.deserialize(data.id, "string", "")

      res.isReadOnly = ObjectSerializer.deserialize(data.is_read_only, "boolean", "")

      if (['ordered', 'free', undefined].includes(data.layout_type)) {
          res.layoutType = data.layout_type;
      } else {
          throw TypeError(`invalid enum value ${ data.layout_type } for layout_type`);
      }

      res.modifiedAt = ObjectSerializer.deserialize(data.modified_at, "Date", "date-time")

      res.title = ObjectSerializer.deserialize(data.title, "string", "")

      res.url = ObjectSerializer.deserialize(data.url, "string", "")


      return res;
    }

    static serialize(data: DashboardSummaryDefinition): {[key: string]: any} {
        let attributeTypes = DashboardSummaryDefinition.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.author_handle = ObjectSerializer.serialize(data.authorHandle, "string", "")

        res.created_at = ObjectSerializer.serialize(data.createdAt, "Date", "date-time")

        res.description = ObjectSerializer.serialize(data.description, "string", "")

        res.id = ObjectSerializer.serialize(data.id, "string", "")

        res.is_read_only = ObjectSerializer.serialize(data.isReadOnly, "boolean", "")

        if (['ordered', 'free', undefined].includes(data.layoutType)) {
            res.layout_type = data.layoutType;
        } else {
            throw TypeError(`invalid enum value ${ data.layoutType } for layoutType`);
        }

        res.modified_at = ObjectSerializer.serialize(data.modifiedAt, "Date", "date-time")

        res.title = ObjectSerializer.serialize(data.title, "string", "")

        res.url = ObjectSerializer.serialize(data.url, "string", "")

        return res
    }
    
    public constructor() {
    }
}



