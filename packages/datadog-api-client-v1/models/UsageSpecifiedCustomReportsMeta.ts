/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UsageSpecifiedCustomReportsPage } from './UsageSpecifiedCustomReportsPage';
import { HttpFile } from '../http/http';
import { ObjectSerializer } from './ObjectSerializer';

/**
* The object containing document metadata.
*/

export class UsageSpecifiedCustomReportsMeta {
    'page'?: UsageSpecifiedCustomReportsPage;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: {[key: string]: {baseName: string, type: string, format: string}} = {
        "page": {
            "baseName": "page",
            "type": "UsageSpecifiedCustomReportsPage",
            "format": ""
        }    };

    static getAttributeTypeMap() {
        return UsageSpecifiedCustomReportsMeta.attributeTypeMap;
    }

    static deserialize(data: {[key: string]: any}): UsageSpecifiedCustomReportsMeta {
      let res = new UsageSpecifiedCustomReportsMeta();

      res.page = ObjectSerializer.deserialize(data.page, "UsageSpecifiedCustomReportsPage", "")


      return res;
    }

    static serialize(data: UsageSpecifiedCustomReportsMeta): {[key: string]: any} {
        let attributeTypes = UsageSpecifiedCustomReportsMeta.getAttributeTypeMap();
        let res: {[index: string]: any} = {};
        for (let [key, value] of Object.entries(data)) {
            if (!(key in attributeTypes)) {
                throw new TypeError(`${key} attribute not in schema`);
            }
        }
        res.page = ObjectSerializer.serialize(data.page, "UsageSpecifiedCustomReportsPage", "")

        return res
    }
    
    public constructor() {
    }
}



