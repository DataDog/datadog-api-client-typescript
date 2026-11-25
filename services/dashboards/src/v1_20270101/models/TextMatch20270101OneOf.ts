import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TextMatchAnyOfAnyOfItemType } from "./TextMatchAnyOfAnyOfItemType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TextMatch20270101OneOf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": TextMatchAnyOfAnyOfItemType;
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
      type: "TextMatchAnyOfAnyOfItemType",
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
    return TextMatch20270101OneOf.attributeTypeMap;
  }

  public constructor() {}
}
