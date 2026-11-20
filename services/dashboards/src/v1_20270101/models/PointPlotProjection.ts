import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PointPlotProjectionDimensionsItems } from "./PointPlotProjectionDimensionsItems";
import { PointPlotProjectionType } from "./PointPlotProjectionType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class PointPlotProjection {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dimensions": Array<PointPlotProjectionDimensionsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "extraColumns"?: Array<string>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": PointPlotProjectionType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    dimensions: {
      baseName: "dimensions",
      type: "Array<PointPlotProjectionDimensionsItems>",
      required: true,
    },
    extraColumns: {
      baseName: "extra_columns",
      type: "Array<string>",
    },
    type: {
      baseName: "type",
      type: "PointPlotProjectionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return PointPlotProjection.attributeTypeMap;
  }

  public constructor() {}
}
