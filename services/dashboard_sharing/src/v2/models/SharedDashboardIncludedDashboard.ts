import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SharedDashboardIncludedDashboardAttributes } from "./SharedDashboardIncludedDashboardAttributes";
import { SharedDashboardIncludedDashboardType } from "./SharedDashboardIncludedDashboardType";

/**
 * Included dashboard resource.
 */
export class SharedDashboardIncludedDashboard {
  /**
   * Attributes of the included dashboard.
   */
  "attributes": SharedDashboardIncludedDashboardAttributes;
  /**
   * ID of the dashboard.
   */
  "id": string;
  /**
   * Included dashboard resource type.
   */
  "type": SharedDashboardIncludedDashboardType;
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
    attributes: {
      baseName: "attributes",
      type: "SharedDashboardIncludedDashboardAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SharedDashboardIncludedDashboardType",
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
    return SharedDashboardIncludedDashboard.attributeTypeMap;
  }

  public constructor() {}
}
