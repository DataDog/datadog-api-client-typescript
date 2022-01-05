/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DashboardListItem } from './DashboardListItem';
import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* Dashboards within a list.
*/

export class DashboardListItems {
    /**
    * List of dashboards in the dashboard list.
    */
    'dashboards': Array<DashboardListItem>;
    /**
    * Number of dashboards in the dashboard list.
    */
    'total'?: number;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "dashboards": {
            "baseName": "dashboards",
            "type": "Array<DashboardListItem>",
            "required": true,
            
        },
        "total": {
            "baseName": "total",
            "type": "number",
            
            "format": "int64",
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return DashboardListItems.attributeTypeMap;
    }

    public constructor() {
    }
}



