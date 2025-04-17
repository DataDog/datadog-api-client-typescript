import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserTargetType } from "./UserTargetType";

/**
 * Represents a user target for an escalation policy step, including the user's ID and resource type.
 */
export class UserTarget {
  /**
   * Specifies the unique identifier of the user resource.
   */
  "id": string;
  /**
   * Indicates that the resource is of type `users`.
   */
  "type": UserTargetType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "UserTargetType",
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
    return UserTarget.attributeTypeMap;
  }

  public constructor() {}
}
