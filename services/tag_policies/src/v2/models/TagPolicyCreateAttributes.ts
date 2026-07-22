import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TagPolicyCreateType } from "./TagPolicyCreateType";
import { TagPolicySource } from "./TagPolicySource";

/**
 * Attributes that can be supplied when creating a tag policy.
 */
export class TagPolicyCreateAttributes {
  /**
   * Whether the policy is currently enforced. Defaults to `true` for newly created policies.
   */
  "enabled"?: boolean;
  /**
   * When `true`, the policy matches tag values that do NOT match any of the supplied patterns. Defaults to `false`.
   */
  "negated"?: boolean;
  /**
   * Human-readable name for the tag policy.
   */
  "policyName": string;
  /**
   * The policy type allowed when creating a tag policy. Only `surfacing` is accepted at
   * creation time.
   */
  "policyType": TagPolicyCreateType;
  /**
   * When `true`, telemetry without this tag is treated as a violation. Defaults to `false`.
   */
  "required"?: boolean;
  /**
   * The scope the policy applies within. Typically an environment, team, or
   * organization-level identifier used to limit where the policy is enforced.
   */
  "scope": string;
  /**
   * The telemetry source that a tag policy applies to.
   */
  "source": TagPolicySource;
  /**
   * The tag key that the policy governs (for example, `service`).
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
  "additionalProperties"?: { [key: string]: any; };
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
      type: "TagPolicyCreateType",
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
      type: "TagPolicySource",
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
    return TagPolicyCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
