import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HeatgridColor } from "./HeatgridColor";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HeatgridStop {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "color": HeatgridColor;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "position": number;
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
    position: {
      baseName: "position",
      type: "number",
      required: true,
      format: "double",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridStop.attributeTypeMap;
  }

  public constructor() {}
}
