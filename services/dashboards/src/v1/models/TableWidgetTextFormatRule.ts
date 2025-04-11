import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TableWidgetTextFormatMatch } from "./TableWidgetTextFormatMatch";
import { TableWidgetTextFormatPalette } from "./TableWidgetTextFormatPalette";
import { TableWidgetTextFormatReplace } from "./TableWidgetTextFormatReplace";

/**
 * Text format rules.
 */
export class TableWidgetTextFormatRule {
  /**
   * Hex representation of the custom background color. Used with custom background palette option.
   */
  "customBgColor"?: string;
  /**
   * Hex representation of the custom text color. Used with custom text palette option.
   */
  "customFgColor"?: string;
  /**
   * Match rule for the table widget text format.
   */
  "match": TableWidgetTextFormatMatch;
  /**
   * Color-on-color palette to highlight replaced text.
   */
  "palette"?: TableWidgetTextFormatPalette;
  /**
   * Replace rule for the table widget text format.
   */
  "replace"?: TableWidgetTextFormatReplace;
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
    customBgColor: {
      baseName: "custom_bg_color",
      type: "string",
    },
    customFgColor: {
      baseName: "custom_fg_color",
      type: "string",
    },
    match: {
      baseName: "match",
      type: "TableWidgetTextFormatMatch",
      required: true,
    },
    palette: {
      baseName: "palette",
      type: "TableWidgetTextFormatPalette",
    },
    replace: {
      baseName: "replace",
      type: "TableWidgetTextFormatReplace",
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
    return TableWidgetTextFormatRule.attributeTypeMap;
  }

  public constructor() {}
}
