import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TableTrendCellDisplayModeOptionsYScale } from "./TableTrendCellDisplayModeOptionsYScale";
import { TableTrendType } from "./TableTrendType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TableTrendCellDisplayModeOptions {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "trendType": TableTrendType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "yScale": TableTrendCellDisplayModeOptionsYScale;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    trendType: {
      baseName: "trend_type",
      type: "TableTrendType",
      required: true,
    },
    yScale: {
      baseName: "y_scale",
      type: "TableTrendCellDisplayModeOptionsYScale",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TableTrendCellDisplayModeOptions.attributeTypeMap;
  }

  public constructor() {}
}
