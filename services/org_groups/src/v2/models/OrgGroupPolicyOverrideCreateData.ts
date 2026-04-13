import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupPolicyOverrideCreateAttributes } from "./OrgGroupPolicyOverrideCreateAttributes";
import { OrgGroupPolicyOverrideCreateRelationships } from "./OrgGroupPolicyOverrideCreateRelationships";
import { OrgGroupPolicyOverrideType } from "./OrgGroupPolicyOverrideType";

/**
 * Data for creating an org group policy override.
 */
export class OrgGroupPolicyOverrideCreateData {
  /**
   * Attributes for creating a policy override.
   */
  "attributes": OrgGroupPolicyOverrideCreateAttributes;
  /**
   * Relationships for creating a policy override.
   */
  "relationships": OrgGroupPolicyOverrideCreateRelationships;
  /**
   * Org group policy overrides resource type.
   */
  "type": OrgGroupPolicyOverrideType;
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
      type: "OrgGroupPolicyOverrideCreateAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "OrgGroupPolicyOverrideCreateRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OrgGroupPolicyOverrideType",
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
    return OrgGroupPolicyOverrideCreateData.attributeTypeMap;
  }

  public constructor() {}
}
