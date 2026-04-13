import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupMembershipBulkUpdateData } from "./OrgGroupMembershipBulkUpdateData";

/**
 * Request to bulk update org group memberships.
 */
export class OrgGroupMembershipBulkUpdateRequest {
  /**
   * Data for bulk updating org group memberships.
   */
  "data": OrgGroupMembershipBulkUpdateData;
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
      type: "OrgGroupMembershipBulkUpdateData",
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
    return OrgGroupMembershipBulkUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
