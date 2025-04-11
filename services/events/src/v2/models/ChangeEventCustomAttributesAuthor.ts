import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChangeEventCustomAttributesAuthorType } from "./ChangeEventCustomAttributesAuthorType";

/**
 * Object representing the entity which made the change. Optional field but if provided should include `type` and `name`.
 */
export class ChangeEventCustomAttributesAuthor {
  /**
   * Author's name. Limited to 128 characters.
   */
  "name": string;
  /**
   * Author's type.
   */
  "type": ChangeEventCustomAttributesAuthorType;
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ChangeEventCustomAttributesAuthorType",
      required: true,
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
    return ChangeEventCustomAttributesAuthor.attributeTypeMap;
  }

  public constructor() {}
}
