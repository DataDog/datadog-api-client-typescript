/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ImageWidgetDefinitionType } from './ImageWidgetDefinitionType';
import { WidgetImageSizing } from './WidgetImageSizing';
import { WidgetMargin } from './WidgetMargin';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* The image widget allows you to embed an image on your dashboard. An image can be a PNG, JPG, or animated GIF. Only available on FREE layout dashboards.
*/

export class ImageWidgetDefinition {
    'margin'?: WidgetMargin;
    'sizing'?: WidgetImageSizing;
    'type': ImageWidgetDefinitionType;
    /**
    * URL of the image.
    */
    'url': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "margin": {
            "baseName": "margin",
            "type": "WidgetMargin",
            "format": ""
        },
        "sizing": {
            "baseName": "sizing",
            "type": "WidgetImageSizing",
            "format": ""
        },
        "type": {
            "baseName": "type",
            "type": "ImageWidgetDefinitionType",
            "format": ""
        },
        "url": {
            "baseName": "url",
            "type": "string",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return ImageWidgetDefinition.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): ImageWidgetDefinition {
      let res = new ImageWidgetDefinition();

      if (['small', 'large', undefined].includes(data.margin)) {
          res.margin = data.margin;
      } else {
          throw TypeError(`invalid enum value ${ data.margin } for margin`);
      }

      if (['zoom', 'fit', 'center', undefined].includes(data.sizing)) {
          res.sizing = data.sizing;
      } else {
          throw TypeError(`invalid enum value ${ data.sizing } for sizing`);
      }

      if (data.type === undefined) {
          throw new TypeError("missing required attribute 'type' on 'ImageWidgetDefinition' object");
      }
      if (['image', undefined].includes(data.type)) {
          res.type = data.type;
      } else {
          throw TypeError(`invalid enum value ${ data.type } for type`);
      }

      if (data.url === undefined) {
          throw new TypeError("missing required attribute 'url' on 'ImageWidgetDefinition' object");
      }
      res.url = ObjectSerializer.deserialize(data.url, "string", "")


      return res;
    }

    static serialize(data: ImageWidgetDefinition): {[key: string]: any} {
        let attributeTypes = ImageWidgetDefinition.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        if (['small', 'large', undefined].includes(data.margin)) {
            res.margin = data.margin;
        } else {
            throw TypeError(`invalid enum value ${ data.margin } for margin`);
        }

        if (['zoom', 'fit', 'center', undefined].includes(data.sizing)) {
            res.sizing = data.sizing;
        } else {
            throw TypeError(`invalid enum value ${ data.sizing } for sizing`);
        }

        if (data.type === undefined) {
            throw new TypeError("missing required attribute 'type' on 'ImageWidgetDefinition' object");
        }
        if (['image', undefined].includes(data.type)) {
            res.type = data.type;
        } else {
            throw TypeError(`invalid enum value ${ data.type } for type`);
        }

        if (data.url === undefined) {
            throw new TypeError("missing required attribute 'url' on 'ImageWidgetDefinition' object");
        }
        res.url = ObjectSerializer.serialize(data.url, "string", "")

        return res
    }
    
    public constructor() {
    }
}



