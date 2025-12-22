import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserAttributes } from "./UserAttributes";
import { UserType } from "./UserType";

export class User140420082644000 {
  /**
   * Attributes of user object returned by the API.
   */
  "attributes"?: UserAttributes;
  "id"?: string;
  /**
   * Users resource type.
   */
  "type": UserType;
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
      type: "UserAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "UserType",
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
    return User140420082644000.attributeTypeMap;
  }

  public constructor() {}
}
