/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardListItemResponse } from "./DashboardListItemResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing a list of added dashboards.
 */
export class DashboardListAddItemsResponse {
  /**
   * List of dashboards added to the dashboard list.
   */
  "addedDashboardsToList"?: Array<DashboardListItemResponse>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    addedDashboardsToList: {
      baseName: "added_dashboards_to_list",
      type: "Array<DashboardListItemResponse>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DashboardListAddItemsResponse.attributeTypeMap;
  }

  public constructor() {}
}
