import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RoutingRuleRelationshipsPolicyData } from "./RoutingRuleRelationshipsPolicyData";

/**
 * Defines the relationship that links a routing rule to a policy.
 */
export class RoutingRuleRelationshipsPolicy {
  /**
   * Represents the policy data reference, containing the policy's ID and resource type.
   */
  "data": RoutingRuleRelationshipsPolicyData;
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
    data: {
      baseName: "data",
      type: "RoutingRuleRelationshipsPolicyData",
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
    return RoutingRuleRelationshipsPolicy.attributeTypeMap;
  }

  public constructor() {}
}
