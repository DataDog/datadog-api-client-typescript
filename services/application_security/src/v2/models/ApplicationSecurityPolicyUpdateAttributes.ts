import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ApplicationSecurityPolicyRuleOverride } from "./ApplicationSecurityPolicyRuleOverride";
import { ApplicationSecurityPolicyScope } from "./ApplicationSecurityPolicyScope";

/**
 * Update a WAF policy.
 */
export class ApplicationSecurityPolicyUpdateAttributes {
  /**
   * Description of the WAF policy.
   */
  "description": string;
  /**
   * Make this policy the default policy. The default policy is applied to every services not specifically added to another policy.
   */
  "isDefault": boolean;
  /**
   * The Name of the WAF policy.
   */
  "name": string;
  /**
   * Presets enabled on this policy.
   */
  "protectionPresets": Array<string>;
  /**
   * Rule overrides applied by the policy.
   */
  "rules": Array<ApplicationSecurityPolicyRuleOverride>;
  /**
   * The scope of the WAF policy.
   */
  "scope": Array<ApplicationSecurityPolicyScope>;
  /**
   * Version of the WAF ruleset maintained by Datadog used by this policy. 0 is the default value.
   */
  "version": number;
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
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    isDefault: {
      baseName: "isDefault",
      type: "boolean",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    protectionPresets: {
      baseName: "protectionPresets",
      type: "Array<string>",
      required: true,
    },
    rules: {
      baseName: "rules",
      type: "Array<ApplicationSecurityPolicyRuleOverride>",
      required: true,
    },
    scope: {
      baseName: "scope",
      type: "Array<ApplicationSecurityPolicyScope>",
      required: true,
    },
    version: {
      baseName: "version",
      type: "number",
      required: true,
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
    return ApplicationSecurityPolicyUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
