import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HeatgridTextFormatMatch } from "./HeatgridTextFormatMatch";
import { HeatgridTextFormatReplace } from "./HeatgridTextFormatReplace";

/**
 * A rule for matching and optionally replacing a group label.
 */
export class HeatgridTextFormatRule {
  /**
   * Match a group label against a string.
   */
  "match": HeatgridTextFormatMatch;
  /**
   * Replace all or part of a matching group label.
   */
  "replace"?: HeatgridTextFormatReplace;
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
      type: "HeatgridTextFormatMatch",
      required: true,
    },
    replace: {
      baseName: "replace",
      type: "HeatgridTextFormatReplace",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridTextFormatRule.attributeTypeMap;
  }

  public constructor() {}
}
