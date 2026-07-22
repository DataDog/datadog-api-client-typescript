import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgGroupPolicySuggestionStatus } from "./OrgGroupPolicySuggestionStatus";

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
  "additionalProperties"?: { [key: string]: any; };
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
