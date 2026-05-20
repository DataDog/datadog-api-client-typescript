import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RoutingRuleEscalationPolicyActionSupportHours } from "./RoutingRuleEscalationPolicyActionSupportHours";
import { RoutingRuleEscalationPolicyActionType } from "./RoutingRuleEscalationPolicyActionType";
import { Urgency } from "./Urgency";

/**
 * Triggers an escalation policy.
 */
export class RoutingRuleEscalationPolicyAction {
  /**
   * The number of minutes before an acknowledged page is re-triggered.
   */
  "ackTimeoutMinutes"?: number;
  /**
   * The ID of the escalation policy to route to.
   */
  "policyId": string;
  /**
   * Support hours during which the escalation policy will be executed. Outside of these hours, the escalation policy will be on hold and triggered once the next support hours window starts. This is mutually exclusive with the top-level `time_restriction` field on the routing rule.
   */
  "supportHours"?: RoutingRuleEscalationPolicyActionSupportHours;
  /**
   * Indicates that the action pages an escalation policy. This action can be set once per routing rule item, and is mutually exclusive with the top-level `policy_id` field on the routing rule.
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
      type: "RoutingRuleEscalationPolicyActionSupportHours",
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
