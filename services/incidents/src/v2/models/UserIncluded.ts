import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserIncludedAttributes } from "./UserIncludedAttributes";

/**
 * Included user data.
 */
export class UserIncluded {
  /**
   * Attributes of an included user.
   */
  "attributes": UserIncludedAttributes;
  /**
   * The UUID of the user.
   */
  "id": string;
  /**
   * The type of the included resource.
   */
  "type": string;
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
      type: "UserIncludedAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return UserIncluded.attributeTypeMap;
  }

  public constructor() {}
}
