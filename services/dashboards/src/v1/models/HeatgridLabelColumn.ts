import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HeatgridLabelColumnWidth } from "./HeatgridLabelColumnWidth";
import { HeatgridTextFormatRule } from "./HeatgridTextFormatRule";

/**
 * Configuration of the group label column. Its width is sized automatically when omitted.
 */
export class HeatgridLabelColumn {
  /**
   * Ordered string replacement rules for the group labels.
   */
  "textFormats"?: Array<HeatgridTextFormatRule>;
  /**
   * Width of the label column.
   */
  "width"?: HeatgridLabelColumnWidth;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    textFormats: {
      baseName: "text_formats",
      type: "Array<HeatgridTextFormatRule>",
    },
    width: {
      baseName: "width",
      type: "HeatgridLabelColumnWidth",
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
