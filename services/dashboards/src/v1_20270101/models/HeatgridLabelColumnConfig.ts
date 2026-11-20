import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HeatgridLabelColumnWidth } from "./HeatgridLabelColumnWidth";
import { TextReplacementRule } from "./TextReplacementRule";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HeatgridLabelColumnConfig {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "textFormats"?: Array<TextReplacementRule>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
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
      type: "Array<TextReplacementRule>",
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
    return HeatgridLabelColumnConfig.attributeTypeMap;
  }

  public constructor() {}
}
