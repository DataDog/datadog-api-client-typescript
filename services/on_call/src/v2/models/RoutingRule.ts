import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RoutingRuleAttributes } from "./RoutingRuleAttributes";
import { RoutingRuleRelationships } from "./RoutingRuleRelationships";
import { RoutingRuleType } from "./RoutingRuleType";

/**
 * Represents a routing rule, including its attributes, relationships, and unique identifier.
 */
export class RoutingRule {
  /**
   * Defines the configurable attributes of a routing rule, such as actions, query, time restriction, and urgency.
   */
  "attributes"?: RoutingRuleAttributes;
  /**
   * Specifies the unique identifier of this routing rule.
   */
  "id"?: string;
  /**
   * Specifies relationships for a routing rule, linking to associated policy resources.
   */
  "relationships"?: RoutingRuleRelationships;
  /**
   * Team routing rules resource type.
   */
  "type": RoutingRuleType;
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
    attributes: {
      baseName: "attributes",
      type: "RoutingRuleAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "RoutingRuleRelationships",
    },
    type: {
      baseName: "type",
      type: "RoutingRuleType",
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
    return RoutingRule.attributeTypeMap;
  }

  public constructor() {}
}
