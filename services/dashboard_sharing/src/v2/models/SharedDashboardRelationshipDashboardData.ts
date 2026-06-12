import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SharedDashboardIncludedDashboardType } from "./SharedDashboardIncludedDashboardType";

/**
 * Dashboard relationship data.
 */
export class SharedDashboardRelationshipDashboardData {
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
    return SharedDashboardRelationshipDashboardData.attributeTypeMap;
  }

  public constructor() {}
}
