/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for updating a tag policy. All fields are optional.
 */
export class TagPolicyAttributesUpdateRequest {
  /**
   * Whether the policy is enabled.
   */
  "enabled"?: boolean;
  /**
   * Whether the policy is negated.
   */
  "negated"?: boolean;
  /**
   * The name of the tag policy.
   */
  "policyName"?: string;
  /**
   * Whether the tag is required.
   */
  "required"?: boolean;
  /**
   * The scope of the tag policy.
   */
  "scope"?: string;
  /**
   * The data source for the tag policy (e.g., logs, metrics).
   */
  "source"?: string;
  /**
   * The tag key that the policy applies to.
   */
  "tagKey"?: string;
  /**
   * List of patterns that tag values must match.
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
    required: {
      baseName: "required",
      type: "boolean",
    },
    scope: {
      baseName: "scope",
      type: "string",
    },
    source: {
      baseName: "source",
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
    return TagPolicyAttributesUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
