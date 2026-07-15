/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OrgGroupPolicySuggestionStatus } from "./OrgGroupPolicySuggestionStatus";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an org group policy suggestion.
 */
export class OrgGroupPolicySuggestionAttributes {
  /**
   * The ratio of member orgs whose configuration agrees on the recommended value.
   */
  "consensusRatio": number;
  /**
   * The name of the suggested policy.
   */
  "policyName": string;
  /**
   * The recommended value for the policy, based on member org consensus.
   */
  "recommendedValue": any;
  /**
   * The status of the policy suggestion.
   */
  "status": OrgGroupPolicySuggestionStatus;

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
    consensusRatio: {
      baseName: "consensus_ratio",
      type: "number",
      required: true,
      format: "double",
    },
    policyName: {
      baseName: "policy_name",
      type: "string",
      required: true,
    },
    recommendedValue: {
      baseName: "recommended_value",
      type: "any",
      required: true,
    },
    status: {
      baseName: "status",
      type: "OrgGroupPolicySuggestionStatus",
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
    return OrgGroupPolicySuggestionAttributes.attributeTypeMap;
  }

  public constructor() {}
}
