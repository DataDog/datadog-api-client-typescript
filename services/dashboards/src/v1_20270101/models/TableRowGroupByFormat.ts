import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TextFormattingRule } from "./TextFormattingRule";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TableRowGroupByFormat {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "textFormats": Array<TextFormattingRule>;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    textFormats: {
      baseName: "text_formats",
      type: "Array<TextFormattingRule>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TableRowGroupByFormat.attributeTypeMap;
  }

  public constructor() {}
}
