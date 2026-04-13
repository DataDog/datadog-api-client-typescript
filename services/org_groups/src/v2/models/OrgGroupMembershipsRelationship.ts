import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupMembershipRelationshipData } from "./OrgGroupMembershipRelationshipData";

/**
 * Relationship to org group memberships.
 */
export class OrgGroupMembershipsRelationship {
  /**
   * An array of membership relationship references.
   */
  "data": Array<OrgGroupMembershipRelationshipData>;
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
      type: "Array<OrgGroupMembershipRelationshipData>",
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
    return OrgGroupMembershipsRelationship.attributeTypeMap;
  }

  public constructor() {}
}
