import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TeamHierarchyMemberUserData } from "./TeamHierarchyMemberUserData";

/**
 * Linkage to the user.
 */
export class TeamHierarchyMemberUserRelationship {
  /**
   * User resource identifier.
   */
  "data": TeamHierarchyMemberUserData;
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
      type: "TeamHierarchyMemberUserData",
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
    return TeamHierarchyMemberUserRelationship.attributeTypeMap;
  }

  public constructor() {}
}
