/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating or updating a tag policy.
 */
export class TagPolicyAttributesRequest {
  /**
   * Whether the policy is enabled.
   */
  "enabled": boolean;
  /**
   * Whether the policy is negated.
   */
  "negated": boolean;
  /**
   * The name of the tag policy.
   */
  "policyName": string;
  /**
   * Whether the tag is required.
   */
  "required": boolean;
  /**
   * The scope of the tag policy.
   */
  "scope": string;
  /**
   * The data source for the tag policy (e.g., logs, metrics).
   */
  "source": string;
  /**
   * The tag key that the policy applies to.
   */
  "tagKey": string;
  /**
   * List of patterns that tag values must match.
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
      type: "string",
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
    return TagPolicyAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
