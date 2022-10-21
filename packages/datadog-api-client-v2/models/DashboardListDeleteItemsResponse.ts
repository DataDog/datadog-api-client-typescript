/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardListItemResponse } from "./DashboardListItemResponse";

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing a list of deleted dashboards.
 */
export class DashboardListDeleteItemsResponse {
  /**
   * List of dashboards deleted from the dashboard list.
   */
  "deletedDashboardsFromList"?: Array<DashboardListItemResponse>;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    deletedDashboardsFromList: {
      baseName: "deleted_dashboards_from_list",
      type: "Array<DashboardListItemResponse>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DashboardListDeleteItemsResponse.attributeTypeMap;
  }

  public constructor() {}
}
