import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AlertEventAttributesLinksItemCategory } from "./AlertEventAttributesLinksItemCategory";

/**
 * A link.
 */
export class AlertEventAttributesLinksItem {
  /**
   * The category of the link.
   */
  "category"?: AlertEventAttributesLinksItemCategory;
  /**
   * The display text of the link.
   */
  "title"?: string;
  /**
   * The URL of the link.
   */
  "url"?: string;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
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
      type: "AlertEventAttributesLinksItemCategory",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    url: {
      baseName: "url",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AlertEventAttributesLinksItem.attributeTypeMap;
  }

  public constructor() {}
}
