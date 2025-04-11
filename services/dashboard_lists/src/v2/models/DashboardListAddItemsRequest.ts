import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DashboardListItemRequest } from "./DashboardListItemRequest";

/**
 * Request containing a list of dashboards to add.
 */
export class DashboardListAddItemsRequest {
  /**
   * List of dashboards to add the dashboard list.
   */
  "dashboards"?: Array<DashboardListItemRequest>;
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
      type: "Array<DashboardListItemRequest>",
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
    return DashboardListAddItemsRequest.attributeTypeMap;
  }

  public constructor() {}
}
