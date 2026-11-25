import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HeatgridColor } from "./HeatgridColor";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HeatgridBin {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "color": HeatgridColor;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "label"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "lowerBound"?: number;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    color: {
      baseName: "color",
      type: "HeatgridColor",
      required: true,
    },
    label: {
      baseName: "label",
      type: "string",
    },
    lowerBound: {
      baseName: "lower_bound",
      type: "number",
      format: "double",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridBin.attributeTypeMap;
  }

  public constructor() {}
}
