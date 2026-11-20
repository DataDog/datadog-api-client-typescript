import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TextFormattingRuleReplaceAnyOfAnyOfItemType } from "./TextFormattingRuleReplaceAnyOfAnyOfItemType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TextFormattingRule20270101ReplaceOneOf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "substring": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": TextFormattingRuleReplaceAnyOfAnyOfItemType;
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
    substring: {
      baseName: "substring",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TextFormattingRuleReplaceAnyOfAnyOfItemType",
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
    return TextFormattingRule20270101ReplaceOneOf.attributeTypeMap;
  }

  public constructor() {}
}
