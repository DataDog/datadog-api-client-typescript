/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DashboardListItemRequest } from './DashboardListItemRequest';
import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* Request containing the list of dashboards to update to.
*/

export class DashboardListUpdateItemsRequest {
    /**
    * List of dashboards to update the dashboard list to.
    */
    'dashboards'?: Array<DashboardListItemRequest>;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "dashboards": {
            "baseName": "dashboards",
            "type": "Array<DashboardListItemRequest>",
            
            
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return DashboardListUpdateItemsRequest.attributeTypeMap;
    }

    public constructor() {
    }
}



