import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupRelationshipToOne } from "./OrgGroupRelationshipToOne";

/**
 * Relationships of an org group membership.
 */
export class OrgGroupMembershipRelationships {
  /**
   * Relationship to a single org group.
   */
  "orgGroup"?: OrgGroupRelationshipToOne;
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
    orgGroup: {
      baseName: "org_group",
      type: "OrgGroupRelationshipToOne",
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
    return OrgGroupMembershipRelationships.attributeTypeMap;
  }

  public constructor() {}
}
