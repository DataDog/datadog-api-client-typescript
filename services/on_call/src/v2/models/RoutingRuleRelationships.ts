import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RoutingRuleRelationshipsPolicy } from "./RoutingRuleRelationshipsPolicy";

/**
 * Specifies relationships for a routing rule, linking to associated policy resources.
 */
export class RoutingRuleRelationships {
  /**
   * Defines the relationship that links a routing rule to a policy.
   */
  "policy"?: RoutingRuleRelationshipsPolicy;
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
    policy: {
      baseName: "policy",
      type: "RoutingRuleRelationshipsPolicy",
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
    return RoutingRuleRelationships.attributeTypeMap;
  }

  public constructor() {}
}
