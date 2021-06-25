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
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Response containing a list of updated dashboards.
 */

export class DashboardListUpdateItemsResponse {
  /**
   * List of dashboards in the dashboard list.
   */
  "dashboards"?: Array<DashboardListItemResponse>;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    dashboards: {
      baseName: "dashboards",
      type: "Array<DashboardListItemResponse>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return DashboardListUpdateItemsResponse.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): DashboardListUpdateItemsResponse {
    const res = new DashboardListUpdateItemsResponse();

    res.dashboards = ObjectSerializer.deserialize(
      data.dashboards,
      "Array<DashboardListItemResponse>",
      ""
    );

    return res;
  }

  static serialize(
    data: DashboardListUpdateItemsResponse
  ): { [key: string]: any } {
    const attributeTypes = DashboardListUpdateItemsResponse.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    res.dashboards = ObjectSerializer.serialize(
      data.dashboards,
      "Array<DashboardListItemResponse>",
      ""
    );

    return res;
  }

  public constructor() {}
}
