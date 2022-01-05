/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DashboardList } from './DashboardList';
import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* Information on your dashboard lists.
*/

export class DashboardListListResponse {
    /**
    * List of all your dashboard lists.
    */
    'dashboardLists'?: Array<DashboardList>;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "dashboardLists": {
            "baseName": "dashboard_lists",
            "type": "Array<DashboardList>",
            
            
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return DashboardListListResponse.attributeTypeMap;
    }

    public constructor() {
    }
}



