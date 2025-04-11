import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ListAPIsResponseDataAttributes } from "./ListAPIsResponseDataAttributes";

/**
 * Data envelope for `ListAPIsResponse`.
 */
export class ListAPIsResponseData {
  /**
   * Attributes for `ListAPIsResponseData`.
   */
  "attributes"?: ListAPIsResponseDataAttributes;
  /**
   * API identifier.
   */
  "id"?: string;
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
      type: "ListAPIsResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
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
    return ListAPIsResponseData.attributeTypeMap;
  }

  public constructor() {}
}
