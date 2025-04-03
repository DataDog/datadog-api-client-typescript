import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SunburstWidgetLegendTableType } from "./SunburstWidgetLegendTableType";

/**
 * Configuration of table-based legend.
 */
export class SunburstWidgetLegendTable {
  /**
   * Whether or not to show a table legend.
   */
  "type": SunburstWidgetLegendTableType;
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
      type: "SunburstWidgetLegendTableType",
      required: true,
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
    return SunburstWidgetLegendTable.attributeTypeMap;
  }

  public constructor() {}
}
