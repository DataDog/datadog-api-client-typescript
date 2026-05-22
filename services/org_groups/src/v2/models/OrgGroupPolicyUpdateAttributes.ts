import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupPolicyEnforcementTier } from "./OrgGroupPolicyEnforcementTier";

/**
 * Attributes for updating an org group policy.
 */
export class OrgGroupPolicyUpdateAttributes {
  /**
   * The policy content as key-value pairs.
   */
  "content"?: { [key: string]: any };
  /**
   * The enforcement tier of the policy. `OVERRIDE_ALLOWED` means the policy is set but member orgs may mutate it. `GROUP_MANAGED` means the policy is strictly controlled and mutations are blocked for affected orgs. `DELEGATE` means each member org controls its own value.
   */
  "enforcementTier"?: OrgGroupPolicyEnforcementTier;
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
    content: {
      baseName: "content",
      type: "{ [key: string]: any; }",
    },
    enforcementTier: {
      baseName: "enforcement_tier",
      type: "OrgGroupPolicyEnforcementTier",
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
    return OrgGroupPolicyUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
