import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StringTableColumnFormatMode } from "./StringTableColumnFormatMode";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class StringTableColumnFormat {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "mode": StringTableColumnFormatMode;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    mode: {
      baseName: "mode",
      type: "StringTableColumnFormatMode",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return StringTableColumnFormat.attributeTypeMap;
  }

  public constructor() {}
}
