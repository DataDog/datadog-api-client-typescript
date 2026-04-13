import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupMembershipType } from "./OrgGroupMembershipType";
import { OrgGroupMembershipUpdateRelationships } from "./OrgGroupMembershipUpdateRelationships";

/**
 * Data for updating an org group membership.
 */
export class OrgGroupMembershipUpdateData {
  /**
   * The ID of the membership.
   */
  "id": string;
  /**
   * Relationships for updating a membership.
   */
  "relationships": OrgGroupMembershipUpdateRelationships;
  /**
   * Org group memberships resource type.
   */
  "type": OrgGroupMembershipType;
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
      format: "uuid",
    },
    relationships: {
      baseName: "relationships",
      type: "OrgGroupMembershipUpdateRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OrgGroupMembershipType",
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
    return OrgGroupMembershipUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
