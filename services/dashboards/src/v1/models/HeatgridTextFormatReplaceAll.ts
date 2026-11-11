import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HeatgridTextFormatReplaceAllType } from "./HeatgridTextFormatReplaceAllType";

/**
 * Replace the entire matching group label.
 */
export class HeatgridTextFormatReplaceAll {
  /**
   * Replace the entire matching group label.
   */
  "type": HeatgridTextFormatReplaceAllType;
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
    type: {
      baseName: "type",
      type: "HeatgridTextFormatReplaceAllType",
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
    return HeatgridTextFormatReplaceAll.attributeTypeMap;
  }

  public constructor() {}
}
