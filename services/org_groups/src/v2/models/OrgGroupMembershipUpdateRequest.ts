import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupMembershipUpdateData } from "./OrgGroupMembershipUpdateData";

/**
 * Request to update an org group membership.
 */
export class OrgGroupMembershipUpdateRequest {
  /**
   * Data for updating an org group membership.
   */
  "data": OrgGroupMembershipUpdateData;
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
      type: "OrgGroupMembershipUpdateData",
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
    return OrgGroupMembershipUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
