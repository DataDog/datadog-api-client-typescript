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
* A service level objective response containing the requested history.
*/

export class SLOHistoryResponseError {
    /**
    * Human readable error.
    */
    'error'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "error": {
            "baseName": "error",
            "type": "string",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return SLOHistoryResponseError.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): SLOHistoryResponseError {
      let res = new SLOHistoryResponseError();

      res.error = ObjectSerializer.deserialize(data.error, "string", "")


      return res;
    }

    static serialize(data: SLOHistoryResponseError): {[key: string]: any} {
        let attributeTypes = SLOHistoryResponseError.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.error = ObjectSerializer.serialize(data.error, "string", "")

        return res
    }
    
    public constructor() {
    }
}



