import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TextMatch } from "./TextMatch";
import { TextReplacementRule20270101Replace } from "./TextReplacementRule20270101Replace";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TextReplacementRule {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "match": TextMatch;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "replace"?: TextReplacementRule20270101Replace;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    match: {
      baseName: "match",
      type: "TextMatch",
      required: true,
    },
    replace: {
      baseName: "replace",
      type: "TextReplacementRule20270101Replace",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TextReplacementRule.attributeTypeMap;
  }

  public constructor() {}
}
