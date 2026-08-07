import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagRuleType } from "./TagRuleType";

/**
 * Mutable attributes of a tag rule. Each field is optional; omitting a field leaves its
 * current value unchanged. The `source` of a rule cannot be changed.
 */
export class TagRuleUpdateAttributes {
  /**
   * Whether the rule is currently enforced.
   */
  "enabled"?: boolean;
  /**
   * When `true`, the rule matches tag values that do NOT match any of the supplied patterns.
   */
  "negated"?: boolean;
  /**
   * Human-readable name for the tag rule.
   */
  "policyName"?: string;
  /**
   * How the rule is enforced. `blocking` rejects telemetry that violates the rule.
   * `surfacing` only highlights non-compliant telemetry without blocking it.
   */
  "policyType"?: TagRuleType;
  /**
   * When `true`, telemetry without this tag is treated as a violation.
   */
  "required"?: boolean;
  /**
   * The scope the rule applies within.
   */
  "scope"?: string;
  /**
   * The tag key that the rule governs.
   */
  "tagKey"?: string;
  /**
   * One or more patterns that valid values for the tag key must match.
   */
  "tagValuePatterns"?: Array<string>;
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
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    negated: {
      baseName: "negated",
      type: "boolean",
    },
    policyName: {
      baseName: "policy_name",
      type: "string",
    },
    policyType: {
      baseName: "policy_type",
      type: "TagRuleType",
    },
    required: {
      baseName: "required",
      type: "boolean",
    },
    scope: {
      baseName: "scope",
      type: "string",
    },
    tagKey: {
      baseName: "tag_key",
      type: "string",
    },
    tagValuePatterns: {
      baseName: "tag_value_patterns",
      type: "Array<string>",
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
    return TagRuleUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
