import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BarChartWidgetFlatType } from "./BarChartWidgetFlatType";

/**
 * Bar chart widget flat display.
 */
export class BarChartWidgetFlat {
  /**
   * Bar chart widget flat display type.
   */
  "type": BarChartWidgetFlatType;
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
    type: {
      baseName: "type",
      type: "BarChartWidgetFlatType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return BarChartWidgetFlat.attributeTypeMap;
  }

  public constructor() {}
}
