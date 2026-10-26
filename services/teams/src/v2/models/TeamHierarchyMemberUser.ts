import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserAttributes } from "./UserAttributes";
import { UsersType } from "./UsersType";

/**
 * A user included in the hierarchy members response.
 */
export class TeamHierarchyMemberUser {
  /**
   * Attributes of user object returned by the API.
   */
  "attributes": UserAttributes;
  /**
   * UUID of the user.
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
      type: "UserAttributes",
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
      type: "UsersType",
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
    return TeamHierarchyMemberUser.attributeTypeMap;
  }

  public constructor() {}
}
