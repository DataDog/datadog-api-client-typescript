import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DashboardList } from "./DashboardList";

/**
 * Information on your dashboard lists.
 */
export class DashboardListListResponse {
  /**
   * List of all your dashboard lists.
   */
  "dashboardLists"?: Array<DashboardList>;
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
    dashboardLists: {
      baseName: "dashboard_lists",
      type: "Array<DashboardList>",
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
    return DashboardListListResponse.attributeTypeMap;
  }

  public constructor() {}
}
