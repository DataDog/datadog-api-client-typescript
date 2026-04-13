import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GlobalOrgIdentifier } from "./GlobalOrgIdentifier";

/**
 * Attributes for bulk updating org group memberships.
 */
export class OrgGroupMembershipBulkUpdateAttributes {
  /**
   * List of organizations to move. Maximum 100 per request.
   */
  "orgs": Array<GlobalOrgIdentifier>;
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
    orgs: {
      baseName: "orgs",
      type: "Array<GlobalOrgIdentifier>",
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
    return OrgGroupMembershipBulkUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
