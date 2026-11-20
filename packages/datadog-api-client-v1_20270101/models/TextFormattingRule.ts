/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TextFormattingRule20270101Replace } from "./TextFormattingRule20270101Replace";
import { TextMatch } from "./TextMatch";
import { ThresholdPaletteWithCustom } from "./ThresholdPaletteWithCustom";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
