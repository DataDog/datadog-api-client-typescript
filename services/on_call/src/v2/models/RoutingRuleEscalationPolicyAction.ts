import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RoutingRuleEscalationPolicyActionType } from "./RoutingRuleEscalationPolicyActionType";
import { TimeRestrictions } from "./TimeRestrictions";
import { Urgency } from "./Urgency";

/**
 * Routes the page to an escalation policy, optionally restricted to business hours.
 */
export class RoutingRuleEscalationPolicyAction {
  /**
   * The number of minutes before an unacknowledged page is re-escalated.
   */
  "ackTimeoutMinutes"?: number;
  /**
   * The ID of the escalation policy to route to.
   */
  "policyId": string;
  /**
   * Holds time zone information and a list of time restrictions for a routing rule.
   */
  "supportHours"?: TimeRestrictions;
  /**
   * Indicates that the action routes to an escalation policy.
   */
  "type": RoutingRuleEscalationPolicyActionType;
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
    ackTimeoutMinutes: {
      baseName: "ack_timeout_minutes",
      type: "number",
      format: "int64",
    },
    policyId: {
      baseName: "policy_id",
      type: "string",
      required: true,
    },
    supportHours: {
      baseName: "support_hours",
      type: "TimeRestrictions",
    },
    type: {
      baseName: "type",
      type: "RoutingRuleEscalationPolicyActionType",
      required: true,
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
    return RoutingRuleEscalationPolicyAction.attributeTypeMap;
  }

  public constructor() {}
}
