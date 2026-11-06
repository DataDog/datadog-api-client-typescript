import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HeatgridTextFormatReplaceSubstringType } from "./HeatgridTextFormatReplaceSubstringType";

/**
 * Replace a substring of the matching group label.
 */
export class HeatgridTextFormatReplaceSubstring {
  /**
   * Substring to replace.
   */
  "substring": string;
  /**
   * Replace a substring of a matching group label.
   */
  "type": HeatgridTextFormatReplaceSubstringType;
  /**
   * Replacement string.
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
      type: "HeatgridTextFormatReplaceSubstringType",
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
    return HeatgridTextFormatReplaceSubstring.attributeTypeMap;
  }

  public constructor() {}
}
