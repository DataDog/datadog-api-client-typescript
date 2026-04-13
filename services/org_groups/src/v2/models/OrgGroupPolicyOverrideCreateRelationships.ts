import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupPolicyRelationshipToOne } from "./OrgGroupPolicyRelationshipToOne";
import { OrgGroupRelationshipToOne } from "./OrgGroupRelationshipToOne";

/**
 * Relationships for creating a policy override.
 */
export class OrgGroupPolicyOverrideCreateRelationships {
  /**
   * Relationship to a single org group.
   */
  "orgGroup": OrgGroupRelationshipToOne;
  /**
   * Relationship to a single org group policy.
   */
  "orgGroupPolicy": OrgGroupPolicyRelationshipToOne;
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
    orgGroup: {
      baseName: "org_group",
      type: "OrgGroupRelationshipToOne",
      required: true,
    },
    orgGroupPolicy: {
      baseName: "org_group_policy",
      type: "OrgGroupPolicyRelationshipToOne",
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
    return OrgGroupPolicyOverrideCreateRelationships.attributeTypeMap;
  }

  public constructor() {}
}
