import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupPolicyEnforcementTier } from "./OrgGroupPolicyEnforcementTier";
import { OrgGroupPolicyPolicyType } from "./OrgGroupPolicyPolicyType";

/**
 * Attributes of an org group policy.
 */
export class OrgGroupPolicyAttributes {
  /**
   * The policy content as key-value pairs.
   */
  "content"?: { [key: string]: any };
  /**
   * The enforcement tier of the policy. `DEFAULT` means the policy is set but member orgs may mutate it. `ENFORCE` means the policy is strictly controlled and mutations are blocked for affected orgs. `DELEGATE` means each member org controls its own value.
   */
  "enforcementTier": OrgGroupPolicyEnforcementTier;
  /**
   * Timestamp when the policy was last modified.
   */
  "modifiedAt": Date;
  /**
   * The name of the policy.
   */
  "policyName": string;
  /**
   * The type of the policy. Only `org_config` is supported, indicating a policy backed by an organization configuration setting.
   */
  "policyType": OrgGroupPolicyPolicyType;
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
      required: true,
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    policyName: {
      baseName: "policy_name",
      type: "string",
      required: true,
    },
    policyType: {
      baseName: "policy_type",
      type: "OrgGroupPolicyPolicyType",
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
    return OrgGroupPolicyAttributes.attributeTypeMap;
  }

  public constructor() {}
}
