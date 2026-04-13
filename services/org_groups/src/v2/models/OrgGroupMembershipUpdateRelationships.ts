import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupRelationshipToOne } from "./OrgGroupRelationshipToOne";

/**
 * Relationships for updating a membership.
 */
export class OrgGroupMembershipUpdateRelationships {
  /**
   * Relationship to a single org group.
   */
  "orgGroup": OrgGroupRelationshipToOne;
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
    return OrgGroupMembershipUpdateRelationships.attributeTypeMap;
  }

  public constructor() {}
}
