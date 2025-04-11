import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DashboardListItemResponse } from "./DashboardListItemResponse";

/**
 * Response containing a list of added dashboards.
 */
export class DashboardListAddItemsResponse {
  /**
   * List of dashboards added to the dashboard list.
   */
  "addedDashboardsToList"?: Array<DashboardListItemResponse>;
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
    addedDashboardsToList: {
      baseName: "added_dashboards_to_list",
      type: "Array<DashboardListItemResponse>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
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
