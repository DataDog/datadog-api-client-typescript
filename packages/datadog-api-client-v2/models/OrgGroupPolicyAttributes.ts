/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OrgGroupPolicyEnforcementTier } from "./OrgGroupPolicyEnforcementTier";
import { OrgGroupPolicyPolicyType } from "./OrgGroupPolicyPolicyType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an org group policy.
 */
export class OrgGroupPolicyAttributes {
  /**
   * The policy content as key-value pairs. For `org_config` policies, an arbitrary key-value map (for example, `{"value": "UTC"}`). For `role` policies, a `permissions` key containing an array of permission UUIDs (for example, `{"permissions": ["<uuid>", ...]}`).
   */
  "content"?: { [key: string]: any };
  /**
   * The enforcement tier of the policy. `OVERRIDE_ALLOWED` means the policy is set but member orgs may mutate it. `GROUP_MANAGED` means the policy is strictly controlled and mutations are blocked for affected orgs. `DELEGATE` means each member org controls its own value. `role` policies only support `GROUP_MANAGED` and `DELEGATE` — `OVERRIDE_ALLOWED` is rejected for this policy type. Transitioning a `role` policy to `DELEGATE` (disabling it) is one-way — the policy cannot be transitioned back to `GROUP_MANAGED` afterward.
   */
  "enforcementTier": OrgGroupPolicyEnforcementTier;
  /**
   * Timestamp when the policy was last modified.
   */
  "modifiedAt": Date;
  /**
   * The name of the policy. This becomes the name of the resource created across orgs in the group (for example, for `role` policies, the name of the created role).
   */
  "policyName": string;
  /**
   * The type of the policy. `org_config` indicates a policy backed by an organization configuration setting. `role` indicates a policy backed by a Datadog custom role.
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
