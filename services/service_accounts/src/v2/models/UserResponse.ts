import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { User } from "./User";
import { UserResponseIncludedItem } from "./UserResponseIncludedItem";

/**
 * Response containing information about a single user.
 */
export class UserResponse {
  /**
   * User object returned by the API.
   */
  "data"?: User;
  /**
   * Array of objects related to the user.
   */
  "included"?: Array<UserResponseIncludedItem>;
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
    data: {
      baseName: "data",
      type: "User",
    },
    included: {
      baseName: "included",
      type: "Array<UserResponseIncludedItem>",
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
    return UserResponse.attributeTypeMap;
  }

  public constructor() {}
}
