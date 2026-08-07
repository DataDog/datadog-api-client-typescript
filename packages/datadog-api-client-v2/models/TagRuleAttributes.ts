/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TagRuleSource } from "./TagRuleSource";
import { TagRuleType } from "./TagRuleType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of a tag rule resource.
 */
export class TagRuleAttributes {
  /**
   * The RFC 3339 timestamp at which the rule was created.
   */
  "createdAt": Date;
  /**
   * The identifier of the user who created the rule.
   */
  "createdBy": string;
  /**
   * The RFC 3339 timestamp at which the rule was soft-deleted. `null` if the rule has not been deleted. Only present when `include_deleted=true` is requested.
   */
  "deletedAt"?: Date;
  /**
   * The identifier of the user who soft-deleted the rule. `null` if the rule has not been deleted.
   */
  "deletedBy"?: string;
  /**
   * Whether the rule is currently enforced.
   */
  "enabled": boolean;
  /**
   * The RFC 3339 timestamp at which the rule was last modified.
   */
  "modifiedAt": Date;
  /**
   * The identifier of the user who last modified the rule.
   */
  "modifiedBy": string;
  /**
   * When `true`, the rule matches tag values that do NOT match any of the supplied patterns.
   */
  "negated": boolean;
  /**
   * Human-readable name for the tag rule.
   */
  "policyName": string;
  /**
   * How the rule is enforced. `blocking` rejects telemetry that violates the rule.
   * `surfacing` only highlights non-compliant telemetry without blocking it.
   */
  "policyType": TagRuleType;
  /**
   * When `true`, telemetry without this tag is treated as a violation.
   */
  "required": boolean;
  /**
   * The scope the rule applies within.
   */
  "scope": string;
  /**
   * The telemetry source that a tag rule applies to.
   */
  "source": TagRuleSource;
  /**
   * The tag key that the rule governs.
   */
  "tagKey": string;
  /**
   * The patterns that valid values for the tag key must match.
   */
  "tagValuePatterns": Array<string>;
  /**
   * A monotonically increasing version counter that is incremented on each update.
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
      required: true,
    },
    deletedAt: {
      baseName: "deleted_at",
      type: "Date",
      format: "date-time",
    },
    deletedBy: {
      baseName: "deleted_by",
      type: "string",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    modifiedBy: {
      baseName: "modified_by",
      type: "string",
      required: true,
    },
    negated: {
      baseName: "negated",
      type: "boolean",
      required: true,
    },
    policyName: {
      baseName: "policy_name",
      type: "string",
      required: true,
    },
    policyType: {
      baseName: "policy_type",
      type: "TagRuleType",
      required: true,
    },
    required: {
      baseName: "required",
      type: "boolean",
      required: true,
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
    return TagRuleAttributes.attributeTypeMap;
  }

  public constructor() {}
}
