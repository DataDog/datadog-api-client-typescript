import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleMemberRelationshipsUser } from "./ScheduleMemberRelationshipsUser";

/**
 * Defines relationships for a schedule member, primarily referencing a single user.
 */
export class ScheduleMemberRelationships {
  /**
   * Wraps the user data reference for a schedule member.
   */
  "user"?: ScheduleMemberRelationshipsUser;
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
      type: "ScheduleMemberRelationshipsUser",
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
    return ScheduleMemberRelationships.attributeTypeMap;
  }

  public constructor() {}
}
