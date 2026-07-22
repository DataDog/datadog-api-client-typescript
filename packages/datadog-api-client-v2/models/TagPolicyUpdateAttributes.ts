/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TagPolicyType } from "./TagPolicyType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Mutable attributes of a tag policy. Each field is optional; omitting a field leaves its
 * current value unchanged. The `source` of a policy cannot be changed.
*/
export class TagPolicyUpdateAttributes {
  /**
   * Whether the policy is currently enforced.
  */
  "enabled"?: boolean;
  /**
   * When `true`, the policy matches tag values that do NOT match any of the supplied patterns.
  */
  "negated"?: boolean;
  /**
   * Human-readable name for the tag policy.
  */
  "policyName"?: string;
  /**
   * How the policy is enforced. `blocking` rejects telemetry that violates the policy.
   * `surfacing` only highlights non-compliant telemetry without blocking it.
  */
  "policyType"?: TagPolicyType;
  /**
   * When `true`, telemetry without this tag is treated as a violation.
  */
  "required"?: boolean;
  /**
   * The scope the policy applies within.
  */
  "scope"?: string;
  /**
   * The tag key that the policy governs.
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
  "additionalProperties"?: { [key: string]: any; };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "enabled": {
      "baseName": "enabled",
      "type": "boolean",
    },
    "negated": {
      "baseName": "negated",
      "type": "boolean",
    },
    "policyName": {
      "baseName": "policy_name",
      "type": "string",
    },
    "policyType": {
      "baseName": "policy_type",
      "type": "TagPolicyType",
    },
    "required": {
      "baseName": "required",
      "type": "boolean",
    },
    "scope": {
      "baseName": "scope",
      "type": "string",
    },
    "tagKey": {
      "baseName": "tag_key",
      "type": "string",
    },
    "tagValuePatterns": {
      "baseName": "tag_value_patterns",
      "type": "Array<string>",
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




    return TagPolicyUpdateAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









