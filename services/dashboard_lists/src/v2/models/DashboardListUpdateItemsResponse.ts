import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DashboardListItemResponse } from "./DashboardListItemResponse";

/**
 * Response containing a list of updated dashboards.
 */
export class DashboardListUpdateItemsResponse {
  /**
   * List of dashboards in the dashboard list.
   */
  "dashboards"?: Array<DashboardListItemResponse>;
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
    dashboards: {
      baseName: "dashboards",
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
    return DashboardListUpdateItemsResponse.attributeTypeMap;
  }

  public constructor() {}
}
