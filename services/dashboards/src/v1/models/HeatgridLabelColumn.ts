import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HeatgridLabelColumnWidth } from "./HeatgridLabelColumnWidth";

/**
 * Configuration of the group label column.
 */
export class HeatgridLabelColumn {
  /**
   * Width of the label column.
   */
  "width": HeatgridLabelColumnWidth;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    width: {
      baseName: "width",
      type: "HeatgridLabelColumnWidth",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridLabelColumn.attributeTypeMap;
  }

  public constructor() {}
}
