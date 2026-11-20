import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TextFormattingRuleReplaceAnyOfAnyOfItemType4452730016 } from "./TextFormattingRuleReplaceAnyOfAnyOfItemType4452730016";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TextFormattingRule20270101ReplaceOneOf4462863328 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": TextFormattingRuleReplaceAnyOfAnyOfItemType4452730016;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "_with": string;
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
      type: "TextFormattingRuleReplaceAnyOfAnyOfItemType4452730016",
      required: true,
    },
    _with: {
      baseName: "with",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TextFormattingRule20270101ReplaceOneOf4462863328.attributeTypeMap;
  }

  public constructor() {}
}
