import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceAccountCreateAttributes } from "./ServiceAccountCreateAttributes";
import { UserRelationships } from "./UserRelationships";
import { UsersType } from "./UsersType";

/**
 * Object to create a service account User.
 */
export class ServiceAccountCreateData {
  /**
   * Attributes of the created user.
   */
  "attributes": ServiceAccountCreateAttributes;
  /**
   * Relationships of the user object.
   */
  "relationships"?: UserRelationships;
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
      type: "ServiceAccountCreateAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "UserRelationships",
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
    return ServiceAccountCreateData.attributeTypeMap;
  }

  public constructor() {}
}
