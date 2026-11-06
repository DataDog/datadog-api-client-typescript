import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HeatgridTextFormatMatchType } from "./HeatgridTextFormatMatchType";

/**
 * Match a group label against a string.
 */
export class HeatgridTextFormatMatch {
  /**
   * Comparison used to match a group label.
   */
  "type": HeatgridTextFormatMatchType;
  /**
   * String to compare with the group label.
   */
  "value": string;
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
      type: "HeatgridTextFormatMatchType",
      required: true,
    },
    value: {
      baseName: "value",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridTextFormatMatch.attributeTypeMap;
  }

  public constructor() {}
}
