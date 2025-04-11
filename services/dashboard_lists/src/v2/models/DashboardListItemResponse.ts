import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DashboardType } from "./DashboardType";

/**
 * A dashboard within a list.
 */
export class DashboardListItemResponse {
  /**
   * ID of the dashboard.
   */
  "id": string;
  /**
   * The type of the dashboard.
   */
  "type": DashboardType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DashboardType",
      required: true,
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
    return DashboardListItemResponse.attributeTypeMap;
  }

  public constructor() {}
}
