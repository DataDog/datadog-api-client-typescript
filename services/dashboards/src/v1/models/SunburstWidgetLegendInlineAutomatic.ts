import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SunburstWidgetLegendInlineAutomaticType } from "./SunburstWidgetLegendInlineAutomaticType";

/**
 * Configuration of inline or automatic legends.
 */
export class SunburstWidgetLegendInlineAutomatic {
  /**
   * Whether to hide the percentages of the groups.
   */
  "hidePercent"?: boolean;
  /**
   * Whether to hide the values of the groups.
   */
  "hideValue"?: boolean;
  /**
   * Whether to show the legend inline or let it be automatically generated.
   */
  "type": SunburstWidgetLegendInlineAutomaticType;
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
    hidePercent: {
      baseName: "hide_percent",
      type: "boolean",
    },
    hideValue: {
      baseName: "hide_value",
      type: "boolean",
    },
    type: {
      baseName: "type",
      type: "SunburstWidgetLegendInlineAutomaticType",
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
    return SunburstWidgetLegendInlineAutomatic.attributeTypeMap;
  }

  public constructor() {}
}
