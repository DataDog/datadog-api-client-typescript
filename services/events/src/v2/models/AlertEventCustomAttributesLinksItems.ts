import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AlertEventCustomAttributesLinksItemsCategory } from "./AlertEventCustomAttributesLinksItemsCategory";

/**
 * A link.
 */
export class AlertEventCustomAttributesLinksItems {
  /**
   * The category of the link.
   */
  "category": AlertEventCustomAttributesLinksItemsCategory;
  /**
   * The display text of the link. Limited to 300 characters.
   */
  "title"?: string;
  /**
   * The URL of the link. Limited to 2048 characters.
   */
  "url": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    category: {
      baseName: "category",
      type: "AlertEventCustomAttributesLinksItemsCategory",
      required: true,
    },
    title: {
      baseName: "title",
      type: "string",
    },
    url: {
      baseName: "url",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AlertEventCustomAttributesLinksItems.attributeTypeMap;
  }

  public constructor() {}
}
