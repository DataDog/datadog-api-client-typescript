import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricDashboardType } from "./MetricDashboardType";

/**
 * An object of type `dashboard` that can be referenced in the `included` data.
 */
export class MetricAssetDashboardRelationship {
  /**
   * The related dashboard's ID.
   */
  "id"?: string;
  /**
   * Dashboard resource type.
   */
  "type"?: MetricDashboardType;
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
    },
    type: {
      baseName: "type",
      type: "MetricDashboardType",
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
    return MetricAssetDashboardRelationship.attributeTypeMap;
  }

  public constructor() {}
}
