import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupMembershipType } from "./OrgGroupMembershipType";

/**
 * A reference to an org group membership.
 */
export class OrgGroupMembershipRelationshipData {
  /**
   * The ID of the membership.
   */
  "id": string;
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
    return OrgGroupMembershipRelationshipData.attributeTypeMap;
  }

  public constructor() {}
}
