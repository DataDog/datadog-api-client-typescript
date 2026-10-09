import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GlobalOrgIdentifier } from "./GlobalOrgIdentifier";

/**
 * Attributes for adding organizations to an org group.
 */
export class OrgGroupMembershipCreateAttributes {
  /**
   * List of organizations to add. Between 1 and 100 per request. Each `org_uuid` and `org_site` pair must be unique.
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
    return OrgGroupMembershipCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
