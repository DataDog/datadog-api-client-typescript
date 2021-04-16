/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsAPITestResultShortResult } from './SyntheticsAPITestResultShortResult';
import { SyntheticsTestMonitorStatus } from './SyntheticsTestMonitorStatus';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* Object with the results of a single Synthetic API test.
*/

export class SyntheticsAPITestResultShort {
    /**
    * Last time the API test was performed.
    */
    'checkTime'?: number;
    /**
    * Location from which the API test was performed.
    */
    'probeDc'?: string;
    'result'?: SyntheticsAPITestResultShortResult;
    /**
    * ID of the API test result.
    */
    'resultId'?: string;
    'status'?: SyntheticsTestMonitorStatus;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "checkTime": {
            "baseName": "check_time",
            "type": "number",
            "format": "double"
        },
        "probeDc": {
            "baseName": "probe_dc",
            "type": "string",
            "format": ""
        },
        "result": {
            "baseName": "result",
            "type": "SyntheticsAPITestResultShortResult",
            "format": ""
        },
        "resultId": {
            "baseName": "result_id",
            "type": "string",
            "format": ""
        },
        "status": {
            "baseName": "status",
            "type": "SyntheticsTestMonitorStatus",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return SyntheticsAPITestResultShort.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): SyntheticsAPITestResultShort {
      let res = new SyntheticsAPITestResultShort();

      res.checkTime = ObjectSerializer.deserialize(data.check_time, "number", "double")

      res.probeDc = ObjectSerializer.deserialize(data.probe_dc, "string", "")

      res.result = ObjectSerializer.deserialize(data.result, "SyntheticsAPITestResultShortResult", "")

      res.resultId = ObjectSerializer.deserialize(data.result_id, "string", "")

      if ([0, 1, 2, undefined].includes(data.status)) {
          res.status = data.status;
      } else {
          throw TypeError(`invalid enum value ${ data.status } for status`);
      }


      return res;
    }

    static serialize(data: SyntheticsAPITestResultShort): {[key: string]: any} {
        let attributeTypes = SyntheticsAPITestResultShort.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.check_time = ObjectSerializer.serialize(data.checkTime, "number", "double")

        res.probe_dc = ObjectSerializer.serialize(data.probeDc, "string", "")

        res.result = ObjectSerializer.serialize(data.result, "SyntheticsAPITestResultShortResult", "")

        res.result_id = ObjectSerializer.serialize(data.resultId, "string", "")

        if ([0, 1, 2, undefined].includes(data.status)) {
            res.status = data.status;
        } else {
            throw TypeError(`invalid enum value ${ data.status } for status`);
        }

        return res
    }
    
    public constructor() {
    }
}



