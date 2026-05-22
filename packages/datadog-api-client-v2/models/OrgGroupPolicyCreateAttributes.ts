/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OrgGroupPolicyEnforcementTier } from "./OrgGroupPolicyEnforcementTier";
import { OrgGroupPolicyPolicyType } from "./OrgGroupPolicyPolicyType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating an org group policy. If `policy_type` or `enforcement_tier` are not provided, they default to `org_config` and `DEFAULT` respectively.
 */
export class OrgGroupPolicyCreateAttributes {
  /**
   * The policy content as key-value pairs.
   */
  "content": { [key: string]: any };
  /**
   * The enforcement tier of the policy. `OVERRIDE_ALLOWED` means the policy is set but member orgs may mutate it. `GROUP_MANAGED` means the policy is strictly controlled and mutations are blocked for affected orgs. `DELEGATE` means each member org controls its own value.
   */
  "enforcementTier"?: OrgGroupPolicyEnforcementTier;
  /**
   * The name of the policy.
   */
  "policyName": string;
  /**
   * The type of the policy. Only `org_config` is supported, indicating a policy backed by an organization configuration setting.
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
