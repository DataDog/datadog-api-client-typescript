import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TextFormattingRule20270101Replace } from "./TextFormattingRule20270101Replace";
import { TextMatch } from "./TextMatch";
import { ThresholdPaletteWithCustom } from "./ThresholdPaletteWithCustom";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TextFormattingRule {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "customBgColor"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "customFgColor"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "highlightRow"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "match": TextMatch;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "palette"?: ThresholdPaletteWithCustom;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "replace"?: TextFormattingRule20270101Replace;
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
    highlightRow: {
      baseName: "highlight_row",
      type: "boolean",
    },
    match: {
      baseName: "match",
      type: "TextMatch",
      required: true,
    },
    palette: {
      baseName: "palette",
      type: "ThresholdPaletteWithCustom",
    },
    replace: {
      baseName: "replace",
      type: "TextFormattingRule20270101Replace",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TextFormattingRule.attributeTypeMap;
  }

  public constructor() {}
}
