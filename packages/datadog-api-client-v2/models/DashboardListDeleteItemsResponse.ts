/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardListItemResponse } from "./DashboardListItemResponse";

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
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    deletedDashboardsFromList: {
      baseName: "deleted_dashboards_from_list",
      type: "Array<DashboardListItemResponse>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
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
