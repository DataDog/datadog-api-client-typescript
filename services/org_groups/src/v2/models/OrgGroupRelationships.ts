import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupMembershipsRelationship } from "./OrgGroupMembershipsRelationship";

/**
 * Relationships of an org group.
 */
export class OrgGroupRelationships {
  /**
   * Relationship to org group memberships.
   */
  "memberships"?: OrgGroupMembershipsRelationship;
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
    memberships: {
      baseName: "memberships",
      type: "OrgGroupMembershipsRelationship",
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
    return OrgGroupRelationships.attributeTypeMap;
  }

  public constructor() {}
}
