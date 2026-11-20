import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TextMatchAnyOfAnyOfItemType4452733856 } from "./TextMatchAnyOfAnyOfItemType4452733856";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TextMatch20270101OneOf4462866048 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": TextMatchAnyOfAnyOfItemType4452733856;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
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
      type: "TextMatchAnyOfAnyOfItemType4452733856",
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
    return TextMatch20270101OneOf4462866048.attributeTypeMap;
  }

  public constructor() {}
}
