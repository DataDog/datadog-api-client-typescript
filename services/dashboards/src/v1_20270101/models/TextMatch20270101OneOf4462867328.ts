import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TextMatchAnyOfAnyOfItemType4452735776 } from "./TextMatchAnyOfAnyOfItemType4452735776";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TextMatch20270101OneOf4462867328 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": TextMatchAnyOfAnyOfItemType4452735776;
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
      type: "TextMatchAnyOfAnyOfItemType4452735776",
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
    return TextMatch20270101OneOf4462867328.attributeTypeMap;
  }

  public constructor() {}
}
