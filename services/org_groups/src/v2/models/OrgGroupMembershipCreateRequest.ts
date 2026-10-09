import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupMembershipCreateData } from "./OrgGroupMembershipCreateData";

/**
 * Request to add organizations to an org group.
 */
export class OrgGroupMembershipCreateRequest {
  /**
   * Data for adding organizations to an org group.
   */
  "data": OrgGroupMembershipCreateData;
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
      type: "OrgGroupMembershipCreateData",
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
    return OrgGroupMembershipCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
