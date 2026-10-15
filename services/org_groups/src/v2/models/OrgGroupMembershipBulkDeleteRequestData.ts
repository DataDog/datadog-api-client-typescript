import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupMembershipType } from "./OrgGroupMembershipType";

/**
 * A resource identifier for an org group membership to delete.
 */
export class OrgGroupMembershipBulkDeleteRequestData {
  /**
   * The ID of the org group membership.
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
    return OrgGroupMembershipBulkDeleteRequestData.attributeTypeMap;
  }

  public constructor() {}
}
