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
* Composed target for `validatesJSONPath` operator.
*/

export class SyntheticsAssertionJSONPathTargetTarget {
    /**
    * The JSON path to assert.
    */
    'jsonPath'?: string;
    /**
    * The specific operator to use on the path.
    */
    'operator'?: string;
    /**
    * The path target value to compare to.
    */
    'targetValue'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "jsonPath": {
            "baseName": "jsonPath",
            "type": "string",
            "format": ""
        },
        "operator": {
            "baseName": "operator",
            "type": "string",
            "format": ""
        },
        "targetValue": {
            "baseName": "targetValue",
            "type": "any",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return SyntheticsAssertionJSONPathTargetTarget.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): SyntheticsAssertionJSONPathTargetTarget {
      let res = new SyntheticsAssertionJSONPathTargetTarget();

      res.jsonPath = ObjectSerializer.deserialize(data.jsonPath, "string", "")

      res.operator = ObjectSerializer.deserialize(data.operator, "string", "")

      res.targetValue = ObjectSerializer.deserialize(data.targetValue, "any", "")


      return res;
    }

    static serialize(data: SyntheticsAssertionJSONPathTargetTarget): {[key: string]: any} {
        let attributeTypes = SyntheticsAssertionJSONPathTargetTarget.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.jsonPath = ObjectSerializer.serialize(data.jsonPath, "string", "")

        res.operator = ObjectSerializer.serialize(data.operator, "string", "")

        res.targetValue = ObjectSerializer.serialize(data.targetValue, "any", "")

        return res
    }
    
    public constructor() {
    }
}



