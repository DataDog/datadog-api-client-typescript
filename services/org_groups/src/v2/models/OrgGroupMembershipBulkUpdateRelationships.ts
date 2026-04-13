import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupRelationshipToOne } from "./OrgGroupRelationshipToOne";

/**
 * Relationships for bulk updating memberships.
 */
export class OrgGroupMembershipBulkUpdateRelationships {
  /**
   * Relationship to a single org group.
   */
  "sourceOrgGroup": OrgGroupRelationshipToOne;
  /**
   * Relationship to a single org group.
   */
  "targetOrgGroup": OrgGroupRelationshipToOne;
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
    sourceOrgGroup: {
      baseName: "source_org_group",
      type: "OrgGroupRelationshipToOne",
      required: true,
    },
    targetOrgGroup: {
      baseName: "target_org_group",
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
    return OrgGroupMembershipBulkUpdateRelationships.attributeTypeMap;
  }

  public constructor() {}
}
