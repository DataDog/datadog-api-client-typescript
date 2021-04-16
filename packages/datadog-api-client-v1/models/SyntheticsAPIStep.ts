/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsAPIStepSubtype } from './SyntheticsAPIStepSubtype';
import { SyntheticsAssertion } from './SyntheticsAssertion';
import { SyntheticsParsingOptions } from './SyntheticsParsingOptions';
import { SyntheticsTestRequest } from './SyntheticsTestRequest';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* The steps used in a Synthetics multistep API test.
*/

export class SyntheticsAPIStep {
    /**
    * Array of assertions used for the test.
    */
    'assertions'?: Array<SyntheticsAssertion>;
    /**
    * Array of values to parse and save as variables from the response.
    */
    'extractedValues'?: Array<SyntheticsParsingOptions>;
    /**
    * The name of the step.
    */
    'name'?: string;
    'request'?: SyntheticsTestRequest;
    'subtype'?: SyntheticsAPIStepSubtype;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "assertions": {
            "baseName": "assertions",
            "type": "Array<SyntheticsAssertion>",
            "format": ""
        },
        "extractedValues": {
            "baseName": "extractedValues",
            "type": "Array<SyntheticsParsingOptions>",
            "format": ""
        },
        "name": {
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        "request": {
            "baseName": "request",
            "type": "SyntheticsTestRequest",
            "format": ""
        },
        "subtype": {
            "baseName": "subtype",
            "type": "SyntheticsAPIStepSubtype",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return SyntheticsAPIStep.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): SyntheticsAPIStep {
      let res = new SyntheticsAPIStep();

      res.assertions = ObjectSerializer.deserialize(data.assertions, "Array<SyntheticsAssertion>", "")

      res.extractedValues = ObjectSerializer.deserialize(data.extractedValues, "Array<SyntheticsParsingOptions>", "")

      res.name = ObjectSerializer.deserialize(data.name, "string", "")

      res.request = ObjectSerializer.deserialize(data.request, "SyntheticsTestRequest", "")

      if (['http', undefined].includes(data.subtype)) {
          res.subtype = data.subtype;
      } else {
          throw TypeError(`invalid enum value ${ data.subtype } for subtype`);
      }


      return res;
    }

    static serialize(data: SyntheticsAPIStep): {[key: string]: any} {
        let attributeTypes = SyntheticsAPIStep.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.assertions = ObjectSerializer.serialize(data.assertions, "Array<SyntheticsAssertion>", "")

        res.extractedValues = ObjectSerializer.serialize(data.extractedValues, "Array<SyntheticsParsingOptions>", "")

        res.name = ObjectSerializer.serialize(data.name, "string", "")

        res.request = ObjectSerializer.serialize(data.request, "SyntheticsTestRequest", "")

        if (['http', undefined].includes(data.subtype)) {
            res.subtype = data.subtype;
        } else {
            throw TypeError(`invalid enum value ${ data.subtype } for subtype`);
        }

        return res
    }
    
    public constructor() {
    }
}



