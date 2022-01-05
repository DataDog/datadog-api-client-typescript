/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DashboardType } from "./DashboardType";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * A dashboard within a list.
 */

export class DashboardListItemRequest {
  /**
   * ID of the dashboard.
   */
  "id": string;
  "type": DashboardType;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: AttributeTypeMap = {
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DashboardType",
      required: true,
    },
  };

  static getAttributeTypeMap(): AttributeTypeMap {
    return DashboardListItemRequest.attributeTypeMap;
  }

  public constructor() {}
}
