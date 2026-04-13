import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupPolicyRelationshipToOneData } from "./OrgGroupPolicyRelationshipToOneData";

/**
 * Relationship to a single org group policy.
 */
export class OrgGroupPolicyRelationshipToOne {
  /**
   * A reference to an org group policy.
   */
  "data": OrgGroupPolicyRelationshipToOneData;
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
      type: "OrgGroupPolicyRelationshipToOneData",
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
    return OrgGroupPolicyRelationshipToOne.attributeTypeMap;
  }

  public constructor() {}
}
