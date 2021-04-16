/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HostMapRequest } from './HostMapRequest';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* List of definitions.
*/

export class HostMapWidgetDefinitionRequests {
    'fill'?: HostMapRequest;
    'size'?: HostMapRequest;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "fill": {
            "baseName": "fill",
            "type": "HostMapRequest",
            "format": ""
        },
        "size": {
            "baseName": "size",
            "type": "HostMapRequest",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return HostMapWidgetDefinitionRequests.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): HostMapWidgetDefinitionRequests {
      let res = new HostMapWidgetDefinitionRequests();

      res.fill = ObjectSerializer.deserialize(data.fill, "HostMapRequest", "")

      res.size = ObjectSerializer.deserialize(data.size, "HostMapRequest", "")


      return res;
    }

    static serialize(data: HostMapWidgetDefinitionRequests): {[key: string]: any} {
        let attributeTypes = HostMapWidgetDefinitionRequests.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.fill = ObjectSerializer.serialize(data.fill, "HostMapRequest", "")

        res.size = ObjectSerializer.serialize(data.size, "HostMapRequest", "")

        return res
    }
    
    public constructor() {
    }
}



