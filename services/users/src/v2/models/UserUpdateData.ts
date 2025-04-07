import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UsersType } from "./UsersType";
import { UserUpdateAttributes } from "./UserUpdateAttributes";

/**
 * Object to update a user.
 */
export class UserUpdateData {
  /**
   * Attributes of the edited user.
   */
  "attributes": UserUpdateAttributes;
  /**
   * ID of the user.
   */
  "id": string;
  /**
   * Users resource type.
   */
  "type": UsersType;
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
      type: "UserUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "UsersType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UserUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
