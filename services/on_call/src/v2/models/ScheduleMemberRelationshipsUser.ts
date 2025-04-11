import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScheduleMemberRelationshipsUserData } from "./ScheduleMemberRelationshipsUserData";

/**
 * Wraps the user data reference for a schedule member.
 */
export class ScheduleMemberRelationshipsUser {
  /**
   * Points to the user data associated with this schedule member, including an ID and type.
   */
  "data"?: ScheduleMemberRelationshipsUserData;
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
      type: "ScheduleMemberRelationshipsUserData",
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
    return ScheduleMemberRelationshipsUser.attributeTypeMap;
  }

  public constructor() {}
}
