import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TextReplacementRuleReplaceAnyOfAnyOfItemType4452739616 } from "./TextReplacementRuleReplaceAnyOfAnyOfItemType4452739616";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TextReplacementRule20270101ReplaceOneOf4462870048 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": TextReplacementRuleReplaceAnyOfAnyOfItemType4452739616;
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
      type: "TextReplacementRuleReplaceAnyOfAnyOfItemType4452739616",
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
    return TextReplacementRule20270101ReplaceOneOf4462870048.attributeTypeMap;
  }

  public constructor() {}
}
