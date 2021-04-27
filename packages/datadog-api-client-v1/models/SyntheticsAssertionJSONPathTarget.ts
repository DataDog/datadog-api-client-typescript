/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsAssertionJSONPathOperator } from './SyntheticsAssertionJSONPathOperator';
import { SyntheticsAssertionJSONPathTargetTarget } from './SyntheticsAssertionJSONPathTargetTarget';
import { SyntheticsAssertionType } from './SyntheticsAssertionType';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* An assertion for the `validatesJSONPath` operator.
*/

export class SyntheticsAssertionJSONPathTarget {
    'operator': SyntheticsAssertionJSONPathOperator;
    /**
    * The associated assertion property.
    */
    'property'?: string;
    'target'?: SyntheticsAssertionJSONPathTargetTarget;
    'type': SyntheticsAssertionType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "operator": {
            "baseName": "operator",
            "type": "SyntheticsAssertionJSONPathOperator",
            "format": ""
        },
        "property": {
            "baseName": "property",
            "type": "string",
            "format": ""
        },
        "target": {
            "baseName": "target",
            "type": "SyntheticsAssertionJSONPathTargetTarget",
            "format": ""
        },
        "type": {
            "baseName": "type",
            "type": "SyntheticsAssertionType",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return SyntheticsAssertionJSONPathTarget.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): SyntheticsAssertionJSONPathTarget {
      let res = new SyntheticsAssertionJSONPathTarget();

      if (data.operator === undefined) {
          throw new TypeError("missing required attribute 'operator' on 'SyntheticsAssertionJSONPathTarget' object");
      }
      if (['validatesJSONPath', undefined].includes(data.operator)) {
          res.operator = data.operator;
      } else {
          throw TypeError(`invalid enum value ${ data.operator } for operator`);
      }

      res.property = ObjectSerializer.deserialize(data.property, "string", "")

      res.target = ObjectSerializer.deserialize(data.target, "SyntheticsAssertionJSONPathTargetTarget", "")

      if (data.type === undefined) {
          throw new TypeError("missing required attribute 'type' on 'SyntheticsAssertionJSONPathTarget' object");
      }
      if (['body', 'header', 'statusCode', 'certificate', 'responseTime', 'property', 'recordEvery', 'recordSome', 'tlsVersion', 'minTlsVersion', 'latency', 'packetLossPercentage', 'packetsReceived', 'networkHop', undefined].includes(data.type)) {
          res.type = data.type;
      } else {
          throw TypeError(`invalid enum value ${ data.type } for type`);
      }


      return res;
    }

    static serialize(data: SyntheticsAssertionJSONPathTarget): {[key: string]: any} {
        let attributeTypes = SyntheticsAssertionJSONPathTarget.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        if (data.operator === undefined) {
            throw new TypeError("missing required attribute 'operator' on 'SyntheticsAssertionJSONPathTarget' object");
        }
        if (['validatesJSONPath', undefined].includes(data.operator)) {
            res.operator = data.operator;
        } else {
            throw TypeError(`invalid enum value ${ data.operator } for operator`);
        }

        res.property = ObjectSerializer.serialize(data.property, "string", "")

        res.target = ObjectSerializer.serialize(data.target, "SyntheticsAssertionJSONPathTargetTarget", "")

        if (data.type === undefined) {
            throw new TypeError("missing required attribute 'type' on 'SyntheticsAssertionJSONPathTarget' object");
        }
        if (['body', 'header', 'statusCode', 'certificate', 'responseTime', 'property', 'recordEvery', 'recordSome', 'tlsVersion', 'minTlsVersion', 'latency', 'packetLossPercentage', 'packetsReceived', 'networkHop', undefined].includes(data.type)) {
            res.type = data.type;
        } else {
            throw TypeError(`invalid enum value ${ data.type } for type`);
        }

        return res
    }
    
    public constructor() {
    }
}



