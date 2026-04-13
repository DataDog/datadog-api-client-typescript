import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupMembershipData } from "./OrgGroupMembershipData";

/**
 * Response containing a single org group membership.
 */
export class OrgGroupMembershipResponse {
  /**
   * An org group membership resource.
   */
  "data": OrgGroupMembershipData;
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
      type: "OrgGroupMembershipData",
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
    return OrgGroupMembershipResponse.attributeTypeMap;
  }

  public constructor() {}
}
