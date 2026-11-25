import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScatterPlotLegendTypeAnyOfAnyOfItemType } from "./ScatterPlotLegendTypeAnyOfAnyOfItemType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ScatterPlotLegendType20270101OneOf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": ScatterPlotLegendTypeAnyOfAnyOfItemType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    type: {
      baseName: "type",
      type: "ScatterPlotLegendTypeAnyOfAnyOfItemType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScatterPlotLegendType20270101OneOf.attributeTypeMap;
  }

  public constructor() {}
}
