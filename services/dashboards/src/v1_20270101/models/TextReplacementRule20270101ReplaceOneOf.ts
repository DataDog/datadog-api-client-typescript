import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TextReplacementRuleReplaceAnyOfAnyOfItemType } from "./TextReplacementRuleReplaceAnyOfAnyOfItemType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TextReplacementRule20270101ReplaceOneOf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "substring": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": TextReplacementRuleReplaceAnyOfAnyOfItemType;
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
      type: "TextReplacementRuleReplaceAnyOfAnyOfItemType",
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
    return TextReplacementRule20270101ReplaceOneOf.attributeTypeMap;
  }

  public constructor() {}
}
