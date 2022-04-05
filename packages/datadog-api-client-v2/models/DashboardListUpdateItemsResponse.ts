/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DashboardListItemResponse } from "./DashboardListItemResponse";
import { AttributeTypeMap } from "../util";

/**
 * Response containing a list of updated dashboards.
 */

export class DashboardListUpdateItemsResponse {
  /**
   * List of dashboards in the dashboard list.
   */
  "dashboards"?: Array<DashboardListItemResponse>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    dashboards: {
      baseName: "dashboards",
      type: "Array<DashboardListItemResponse>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DashboardListUpdateItemsResponse.attributeTypeMap;
  }

  public constructor() {}
}
