/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsDevice } from './SyntheticsDevice';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* Object with the result of the last browser test run.
*/

export class SyntheticsBrowserTestResultShortResult {
    'device'?: SyntheticsDevice;
    /**
    * Length in second of the browser test run.
    */
    'duration'?: number;
    /**
    * Amount of errors collected for a single browser test run.
    */
    'errorCount'?: number;
    /**
    * Amount of browser test steps completed before failing.
    */
    'stepCountCompleted'?: number;
    /**
    * Total amount of browser test steps.
    */
    'stepCountTotal'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "device": {
            "baseName": "device",
            "type": "SyntheticsDevice",
            "format": ""
        },
        "duration": {
            "baseName": "duration",
            "type": "number",
            "format": "double"
        },
        "errorCount": {
            "baseName": "errorCount",
            "type": "number",
            "format": "int64"
        },
        "stepCountCompleted": {
            "baseName": "stepCountCompleted",
            "type": "number",
            "format": "int64"
        },
        "stepCountTotal": {
            "baseName": "stepCountTotal",
            "type": "number",
            "format": "int64"
        }    };

    static getAttributeTypeMap() {
        return SyntheticsBrowserTestResultShortResult.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): SyntheticsBrowserTestResultShortResult {
      let res = new SyntheticsBrowserTestResultShortResult();

      res.device = ObjectSerializer.deserialize(data.device, "SyntheticsDevice", "")

      res.duration = ObjectSerializer.deserialize(data.duration, "number", "double")

      res.errorCount = ObjectSerializer.deserialize(data.errorCount, "number", "int64")

      res.stepCountCompleted = ObjectSerializer.deserialize(data.stepCountCompleted, "number", "int64")

      res.stepCountTotal = ObjectSerializer.deserialize(data.stepCountTotal, "number", "int64")


      return res;
    }

    static serialize(data: SyntheticsBrowserTestResultShortResult): {[key: string]: any} {
        let attributeTypes = SyntheticsBrowserTestResultShortResult.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.device = ObjectSerializer.serialize(data.device, "SyntheticsDevice", "")

        res.duration = ObjectSerializer.serialize(data.duration, "number", "double")

        res.errorCount = ObjectSerializer.serialize(data.errorCount, "number", "int64")

        res.stepCountCompleted = ObjectSerializer.serialize(data.stepCountCompleted, "number", "int64")

        res.stepCountTotal = ObjectSerializer.serialize(data.stepCountTotal, "number", "int64")

        return res
    }
    
    public constructor() {
    }
}



