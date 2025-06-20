import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChangeEventAttributesAuthorType } from "./ChangeEventAttributesAuthorType";

/**
 * The entity that made the change.
 */
export class ChangeEventAttributesAuthor {
  /**
   * The name of the user or system that made the change.
   */
  "name"?: string;
  /**
   * The type of the author.
   */
  "type"?: ChangeEventAttributesAuthorType;
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
    },
    type: {
      baseName: "type",
      type: "ChangeEventAttributesAuthorType",
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
    return ChangeEventAttributesAuthor.attributeTypeMap;
  }

  public constructor() {}
}
