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
* Describe CI provider.
*/

export class SyntheticsCITestMetadataCi {
    /**
    * Name of the pipeline.
    */
    'pipeline'?: string;
    /**
    * Name of the CI provider.
    */
    'provider'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "pipeline": {
            "baseName": "pipeline",
            "type": "string",
            "format": ""
        },
        "provider": {
            "baseName": "provider",
            "type": "string",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return SyntheticsCITestMetadataCi.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): SyntheticsCITestMetadataCi {
      let res = new SyntheticsCITestMetadataCi();

      res.pipeline = ObjectSerializer.deserialize(data.pipeline, "string", "")

      res.provider = ObjectSerializer.deserialize(data.provider, "string", "")


      return res;
    }

    static serialize(data: SyntheticsCITestMetadataCi): {[key: string]: any} {
        let attributeTypes = SyntheticsCITestMetadataCi.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.pipeline = ObjectSerializer.serialize(data.pipeline, "string", "")

        res.provider = ObjectSerializer.serialize(data.provider, "string", "")

        return res
    }
    
    public constructor() {
    }
}



