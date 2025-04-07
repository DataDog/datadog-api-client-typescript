import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { User } from "./User";

/**
 * Array of Datadog users for a given organization.
 */
export class UserListResponse {
  /**
   * Array of users.
   */
  "users"?: Array<User>;
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
    users: {
      baseName: "users",
      type: "Array<User>",
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
    return UserListResponse.attributeTypeMap;
  }

  public constructor() {}
}
