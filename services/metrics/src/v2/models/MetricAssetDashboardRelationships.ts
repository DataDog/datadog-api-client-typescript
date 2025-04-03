import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MetricAssetDashboardRelationship } from "./MetricAssetDashboardRelationship";

/**
 * An object containing the list of dashboards that can be referenced in the `included` data.
 */
export class MetricAssetDashboardRelationships {
  /**
   * A list of dashboards that can be referenced in the `included` data.
   */
  "data"?: Array<MetricAssetDashboardRelationship>;
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
    data: {
      baseName: "data",
      type: "Array<MetricAssetDashboardRelationship>",
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
    return MetricAssetDashboardRelationships.attributeTypeMap;
  }

  public constructor() {}
}
