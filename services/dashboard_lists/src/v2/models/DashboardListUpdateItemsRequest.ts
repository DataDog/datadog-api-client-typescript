import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DashboardListItemRequest } from "./DashboardListItemRequest";

/**
 * Request containing the list of dashboards to update to.
 */
export class DashboardListUpdateItemsRequest {
  /**
   * List of dashboards to update the dashboard list to.
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
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DashboardListUpdateItemsRequest.attributeTypeMap;
  }

  public constructor() {}
}
