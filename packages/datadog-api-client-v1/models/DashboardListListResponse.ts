/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardList } from "./DashboardList";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Information on your dashboard lists.
 */
export class DashboardListListResponse {
  /**
   * List of all your dashboard lists.
   */
  "dashboardLists"?: Array<DashboardList>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    dashboardLists: {
      baseName: "dashboard_lists",
      type: "Array<DashboardList>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DashboardListListResponse.attributeTypeMap;
  }

  public constructor() {}
}
