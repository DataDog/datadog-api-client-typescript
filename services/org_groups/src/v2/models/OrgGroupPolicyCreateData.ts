import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupPolicyCreateAttributes } from "./OrgGroupPolicyCreateAttributes";
import { OrgGroupPolicyCreateRelationships } from "./OrgGroupPolicyCreateRelationships";
import { OrgGroupPolicyType } from "./OrgGroupPolicyType";

/**
 * Data for creating an org group policy.
 */
export class OrgGroupPolicyCreateData {
  /**
   * Attributes for creating an org group policy.
   */
  "attributes": OrgGroupPolicyCreateAttributes;
  /**
   * Relationships for creating a policy.
   */
  "relationships": OrgGroupPolicyCreateRelationships;
  /**
   * Org group policies resource type.
   */
  "type": OrgGroupPolicyType;
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
    attributes: {
      baseName: "attributes",
      type: "OrgGroupPolicyCreateAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "OrgGroupPolicyCreateRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OrgGroupPolicyType",
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
    return OrgGroupPolicyCreateData.attributeTypeMap;
  }

  public constructor() {}
}
