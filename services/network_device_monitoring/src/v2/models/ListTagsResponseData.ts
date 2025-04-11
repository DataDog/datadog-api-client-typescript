import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ListTagsResponseDataAttributes } from "./ListTagsResponseDataAttributes";

/**
 * The list tags response data.
 */
export class ListTagsResponseData {
  /**
   * The definition of ListTagsResponseDataAttributes object.
   */
  "attributes"?: ListTagsResponseDataAttributes;
  /**
   * The device ID
   */
  "id"?: string;
  /**
   * The type of the resource. The value should always be tags.
   */
  "type"?: string;
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
    attributes: {
      baseName: "attributes",
      type: "ListTagsResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
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
    return ListTagsResponseData.attributeTypeMap;
  }

  public constructor() {}
}
