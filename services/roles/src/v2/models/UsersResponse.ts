import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ResponseMetaAttributes } from "./ResponseMetaAttributes";
import { User } from "./User";
import { UserResponseIncludedItem } from "./UserResponseIncludedItem";

/**
 * Response containing information about multiple users.
 */
export class UsersResponse {
  /**
   * Array of returned users.
   */
  "data"?: Array<User>;
  /**
   * Array of objects related to the users.
   */
  "included"?: Array<UserResponseIncludedItem>;
  /**
   * Object describing meta attributes of response.
   */
  "meta"?: ResponseMetaAttributes;
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
      type: "Array<User>",
    },
    included: {
      baseName: "included",
      type: "Array<UserResponseIncludedItem>",
    },
    meta: {
      baseName: "meta",
      type: "ResponseMetaAttributes",
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
    return UsersResponse.attributeTypeMap;
  }

  public constructor() {}
}
