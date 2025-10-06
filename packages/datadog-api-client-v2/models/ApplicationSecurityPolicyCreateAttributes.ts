/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApplicationSecurityPolicyRuleOverride } from "./ApplicationSecurityPolicyRuleOverride";
import { ApplicationSecurityPolicyScope } from "./ApplicationSecurityPolicyScope";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Create a new WAF policy.
 */
export class ApplicationSecurityPolicyCreateAttributes {
  /**
   * When creating a new policy, clone the policy indicated by this identifier.
   */
  "basedOn": string;
  /**
   * Description of the WAF policy.
   */
  "description": string;
  /**
   * Make this policy the default policy. The default policy is applied to every services not specifically added to another policy.
   */
  "isDefault"?: boolean;
  /**
   * The Name of the WAF policy.
   */
  "name": string;
  /**
   * Presets enabled on this policy.
   */
  "protectionPresets"?: Array<string>;
  /**
   * Rule overrides applied by the policy.
   */
  "rules"?: Array<ApplicationSecurityPolicyRuleOverride>;
  /**
   * The scope of the WAF policy.
   */
  "scope"?: Array<ApplicationSecurityPolicyScope>;
  /**
   * Version of the WAF ruleset maintained by Datadog used by this policy. 0 is the default value.
   */
  "version"?: number;

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
    basedOn: {
      baseName: "basedOn",
      type: "string",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    isDefault: {
      baseName: "isDefault",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    protectionPresets: {
      baseName: "protectionPresets",
      type: "Array<string>",
    },
    rules: {
      baseName: "rules",
      type: "Array<ApplicationSecurityPolicyRuleOverride>",
    },
    scope: {
      baseName: "scope",
      type: "Array<ApplicationSecurityPolicyScope>",
    },
    version: {
      baseName: "version",
      type: "number",
      format: "int64",
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
    return ApplicationSecurityPolicyCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
