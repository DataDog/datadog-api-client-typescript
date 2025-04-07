import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { User } from "./User";

/**
 * A Datadog User.
 */
export class UserResponse {
  /**
   * Create, edit, and disable users.
   */
  "user"?: User;
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
    user: {
      baseName: "user",
      type: "User",
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
    return UserResponse.attributeTypeMap;
  }

  public constructor() {}
}
