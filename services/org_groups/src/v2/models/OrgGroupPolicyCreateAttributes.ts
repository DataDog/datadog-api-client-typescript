import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupPolicyEnforcementTier } from "./OrgGroupPolicyEnforcementTier";
import { OrgGroupPolicyPolicyType } from "./OrgGroupPolicyPolicyType";

/**
 * Attributes for creating an org group policy. If `policy_type` is not provided, it defaults to `org_config`. `enforcement_tier` is optional; if not provided, the resulting value depends on `policy_type` and is otherwise unspecified.
 */
export class OrgGroupPolicyCreateAttributes {
  /**
   * The policy content as key-value pairs. For `org_config` policies, an arbitrary key-value map (for example, `{"value": "UTC"}`). For `role` policies, a `permissions` key containing an array of permission UUIDs (for example, `{"permissions": ["<uuid>", ...]}`).
   */
  "content": { [key: string]: any };
  /**
   * The enforcement tier of the policy. `OVERRIDE_ALLOWED` means the policy is set but member orgs may mutate it. `GROUP_MANAGED` means the policy is strictly controlled and mutations are blocked for affected orgs. `DELEGATE` means each member org controls its own value. `role` policies only support `GROUP_MANAGED` and `DELEGATE` — `OVERRIDE_ALLOWED` is rejected for this policy type. Transitioning a `role` policy to `DELEGATE` (disabling it) is one-way — the policy cannot be transitioned back to `GROUP_MANAGED` afterward.
   */
  "enforcementTier"?: OrgGroupPolicyEnforcementTier;
  /**
   * The name of the policy. This becomes the name of the resource created across orgs in the group (for example, for `role` policies, the name of the created role).
   */
  "policyName": string;
  /**
   * The type of the policy. `org_config` indicates a policy backed by an organization configuration setting. `role` indicates a policy backed by a Datadog custom role.
   */
  "policyType"?: OrgGroupPolicyPolicyType;
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
      required: true,
    },
    enforcementTier: {
      baseName: "enforcement_tier",
      type: "OrgGroupPolicyEnforcementTier",
    },
    policyName: {
      baseName: "policy_name",
      type: "string",
      required: true,
    },
    policyType: {
      baseName: "policy_type",
      type: "OrgGroupPolicyPolicyType",
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
    return OrgGroupPolicyCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
