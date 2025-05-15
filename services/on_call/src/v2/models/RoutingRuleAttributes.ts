import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RoutingRuleAction } from "./RoutingRuleAction";
import { TimeRestrictions } from "./TimeRestrictions";
import { Urgency } from "./Urgency";

/**
 * Defines the configurable attributes of a routing rule, such as actions, query, time restriction, and urgency.
 */
export class RoutingRuleAttributes {
  /**
   * Specifies the list of actions to perform when the routing rule matches.
   */
  "actions"?: Array<RoutingRuleAction>;
  /**
   * Defines the query or condition that triggers this routing rule.
   */
  "query"?: string;
  /**
   * Holds time zone information and a list of time restrictions for a routing rule.
   */
  "timeRestriction"?: TimeRestrictions;
  /**
   * Specifies the level of urgency for a routing rule (low, high, or dynamic).
   */
  "urgency"?: Urgency;
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
    actions: {
      baseName: "actions",
      type: "Array<RoutingRuleAction>",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    timeRestriction: {
      baseName: "time_restriction",
      type: "TimeRestrictions",
    },
    urgency: {
      baseName: "urgency",
      type: "Urgency",
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
    return RoutingRuleAttributes.attributeTypeMap;
  }

  public constructor() {}
}
