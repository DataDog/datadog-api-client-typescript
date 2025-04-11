import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DashboardListItem } from "./DashboardListItem";

/**
 * Dashboards within a list.
 */
export class DashboardListItems {
  /**
   * List of dashboards in the dashboard list.
   */
  "dashboards": Array<DashboardListItem>;
  /**
   * Number of dashboards in the dashboard list.
   */
  "total"?: number;
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
      type: "Array<DashboardListItem>",
      required: true,
    },
    total: {
      baseName: "total",
      type: "number",
      format: "int64",
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
    return DashboardListItems.attributeTypeMap;
  }

  public constructor() {}
}
