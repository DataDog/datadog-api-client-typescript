/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TagRuleCreateType } from "./TagRuleCreateType";
import { TagRuleSource } from "./TagRuleSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes that can be supplied when creating a tag rule.
 */
export class TagRuleCreateAttributes {
  /**
   * Whether the rule is currently enforced. Defaults to `true` for newly created rules.
   */
  "enabled"?: boolean;
  /**
   * When `true`, the rule matches tag values that do NOT match any of the supplied patterns. Defaults to `false`.
   */
  "negated"?: boolean;
  /**
   * Human-readable name for the tag rule.
   */
  "policyName": string;
  /**
   * The rule type allowed when creating a tag rule. Only `surfacing` is accepted at
   * creation time.
   */
  "policyType": TagRuleCreateType;
  /**
   * When `true`, telemetry without this tag is treated as a violation. Defaults to `false`.
   */
  "required"?: boolean;
  /**
   * The scope the rule applies within. Typically an environment, team, or
   * organization-level identifier used to limit where the rule is enforced.
   */
  "scope": string;
  /**
   * The telemetry source that a tag rule applies to.
   */
  "source": TagRuleSource;
  /**
   * The tag key that the rule governs (for example, `service`).
   */
  "tagKey": string;
  /**
   * One or more patterns that valid values for the tag key must match. At least one
   * pattern is required.
   */
  "tagValuePatterns": Array<string>;

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
      required: true,
    },
    policyType: {
      baseName: "policy_type",
      type: "TagRuleCreateType",
      required: true,
    },
    required: {
      baseName: "required",
      type: "boolean",
    },
    scope: {
      baseName: "scope",
      type: "string",
      required: true,
    },
    source: {
      baseName: "source",
      type: "TagRuleSource",
      required: true,
    },
    tagKey: {
      baseName: "tag_key",
      type: "string",
      required: true,
    },
    tagValuePatterns: {
      baseName: "tag_value_patterns",
      type: "Array<string>",
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
    return TagRuleCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
